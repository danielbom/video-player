import { SettingsIcon } from '@chakra-ui/icons'
import { IconButton, Box, useToast, useDisclosure } from '@chakra-ui/react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { VideoPlayer, PlayerKind, players } from '../../components/VideoPlayer'
import { PlayerHandle } from '../../components/VideoPlayer/types'
import useStateStorage from '../../hooks/useStateStorage'
import { checkArray, TypeCheck } from '../../lib/type-check'
import { PageDrawer } from './PageDrawer'
import { PlayerEvent, PlayerState, PlaylistItem, Settings } from './types'
import { useShowOnClose } from './useShowOnClose'

type Action<T, P = undefined> = P extends undefined ? { type: T; payload?: undefined } : { type: T; payload: P }

type Command =
  | Action<'play', PlaylistItem>
  | Action<'next', PlaylistItem>
  | Action<'previous', PlaylistItem>
  | Action<'fullscreen'>

const DEFAULT_PLAYER_STATE: PlayerState = {
  player: 'media-chrome',
  src: undefined,
}

const DEFAULT_SETTINGS: Settings = {
  player: 'media-chrome',
  src: undefined,
  current: 0,
  playlist: [],
}

export default function Page() {
  const toast = useToast({ isClosable: true })
  const inputFileRef = useRef<HTMLInputElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)
  const playerHandleRef = useRef<PlayerHandle>(null)
  const drawer = useDisclosure()
  const [state, setState] = useState<PlayerState>(DEFAULT_PLAYER_STATE)
  const [settings, setSettings] = useStateStorage<Settings>('settings', DEFAULT_SETTINGS, {
    onInit: (settings?: Settings) => {
      if (!settings) return
      setState({ player: settings.player, src: settings.src })
    },
  })

  function updateSetting(partialSettings: Partial<Settings>) {
    setSettings((prev) => ({ ...prev, ...partialSettings }))
  }

  useShowOnClose({ ref: btnRef, disabled: state.player === 'youtube' && !state.src })

  function importPlayerData(file?: File) {
    if (file) {
      new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = (e) => resolve(e.target?.result)
        reader.onerror = (e) => reject(e)
        reader.readAsText(file)
      })
        .then((content) =>
          typeof content === 'string' //
            ? content
            : Promise.reject(new Error('file content was not readed as string')),
        )
        .then((content) => JSON.parse(content) as unknown)
        .then((newPlaylist) =>
          checkArray(newPlaylist, playlistItemTypeCheck)
            ? newPlaylist
            : Promise.reject(new Error('playlist is not an array of playlist items')),
        )
        .then((newPlaylist) => updateSetting({ playlist: newPlaylist }))
        .then(() => toast({ status: 'success', title: 'Playlist imported' }))
        .catch((e: Error) => toast({ status: 'error', title: 'Invalid file', description: e.message }))
    }
  }

  const onEvent = useCallback(
    (event: PlayerEvent) => {
      setSettings((settings) => {
        const onCommand = ({ type, payload }: Command) => {
          switch (type) {
            case 'play':
              if (!playerHandleRef.current) throw new Error('playerHandleRef is null')
              if (playerHandleRef.current.isPlaying()) {
                playerHandleRef.current.pause()
              } else {
                playerHandleRef.current.play()
              }
              setState({ player: payload.player, src: payload.src })
              break
            case 'next':
              if (!playerHandleRef.current) throw new Error('playerHandleRef is null')
              if (!playerHandleRef.current.isPlaying()) {
                playerHandleRef.current.play()
              }
              setState({ player: payload.player, src: payload.src })
              break
            case 'previous':
              if (!playerHandleRef.current) throw new Error('playerHandleRef is null')
              if (!playerHandleRef.current.isPlaying()) {
                playerHandleRef.current.play()
              }
              setState({ player: payload.player, src: payload.src })
              break
            case 'fullscreen':
              if (!playerHandleRef.current) throw new Error('playerHandleRef is null')
              playerHandleRef.current.fullscreen()
              break
          }
        }

        function exportPlayerData() {
          const fileName = 'player.json'
          const data = JSON.stringify(settings.playlist)
          const blob = new Blob([data], { type: 'application/json' })
          const url = URL.createObjectURL(blob)

          const link = document.createElement('a')
          link.href = url
          link.download = fileName
          link.click()

          URL.revokeObjectURL(url)
          toast({ status: 'success', title: 'Playlist exported' })
        }

        switch (event) {
          case 'play-pause':
            if (settings.playlist.length > 0) {
              const item = settings.playlist[settings.current]
              onCommand({ type: 'play', payload: item })
              if (settings.src !== item.src || settings.player !== item.player) {
                return { ...settings, src: item.src, player: item.player }
              } else {
                return settings
              }
            } else {
              toast({ status: 'warning', title: 'Playlist is empty' })
            }
            break
          case 'next':
            if (settings.current < settings.playlist.length - 1) {
              const item = settings.playlist[settings.current + 1]
              onCommand({ type: 'next', payload: item })
              return {
                ...settings,
                src: item.src,
                player: item.player,
                current: settings.current + 1,
              }
            } else {
              toast({ status: 'warning', title: 'You are at the end of the playlist' })
            }
            break
          case 'previous':
            if (settings.current > 0) {
              const item = settings.playlist[settings.current - 1]
              onCommand({ type: 'previous', payload: item })
              return {
                ...settings,
                src: item.src,
                player: item.player,
                current: settings.current - 1,
              }
            } else {
              toast({ status: 'warning', title: 'You are at the beginning of the playlist' })
            }
            break
          case 'fullscreen':
            onCommand({ type: 'fullscreen' })
            break
          case 'import':
            inputFileRef.current?.click()
            break
          case 'export':
            exportPlayerData()
            break
        }
        return settings
      })
    },
    [toast, setSettings],
  )

  useEffect(() => {
    if (state.player === 'youtube' && state.src) {
      playerHandleRef.current?.onEnd(() => {
        if (playerHandleRef.current?.isPlaying()) {
          onEvent('next')
        }
      })
    }
  }, [onEvent, state])

  return (
    <Box>
      <Box bg="gray.100" w="100vw" h="100vh">
        <VideoPlayer player={state.player} src={state.src} fullPage playerHandleRef={playerHandleRef} />
      </Box>

      <Box ref={btnRef} transition="opacity 0.5s" position="fixed" top="4" right="4">
        <IconButton
          icon={<SettingsIcon />}
          aria-label="Menu"
          variant="ghost"
          colorScheme="blue"
          size="lg"
          onClick={() => drawer.onOpen()}
        />
      </Box>

      <PageDrawer
        settings={settings}
        updateSettings={updateSetting}
        isOpen={drawer.isOpen}
        onClose={() => drawer.onClose()}
        state={state}
        onSave={(newState) => setState((prev) => ({ ...prev, ...newState }))}
        onEvent={onEvent}
      />

      <input
        ref={inputFileRef}
        type="file"
        accept="application/json"
        style={{ display: 'none' }}
        onChange={(e) => importPlayerData(e.target.files?.[0])}
      />
    </Box>
  )
}

const playlistItemTypeCheck: TypeCheck<PlaylistItem> = {
  player: (it) => typeof it === 'string' && players.includes(it as PlayerKind),
  src: (it) => typeof it === 'string',
  title: (it) => typeof it === 'string',
}

//const settingsTypeCheck: TypeCheck<Settings> = {
//  player: (it) => typeof it === 'string' && players.includes(it as PlayerKind),
//  src: (it) => typeof it === 'string' || typeof it === 'undefined',
//  current: (it) => typeof it === 'number',
//  playlist: (it) => checkArray(it, playlistItemTypeCheck),
//}
