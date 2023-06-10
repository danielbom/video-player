import { AddIcon, DeleteIcon, SettingsIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Button,
  Select,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Link,
  Text,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Tooltip,
  useToast,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import React, {
  forwardRef,
  RefObject,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { VideoPlayer, PlayerKind } from '../../components/VideoPlayer'
import { PlayerHandle } from '../../components/VideoPlayer/types'
import useStateStorage from '../../hooks/useStateStorage'
import { checkArray, TypeCheck } from '../../lib/type-check'

type PlaylistItem = {
  src: string
  title: string
  player: PlayerKind
}

type PlayerState = {
  player: PlayerKind
  src: string | undefined
}

type Settings = {
  player: PlayerKind
  src: string | undefined
  current: number
  playlist: PlaylistItem[]
}

export default function PlayerWithDrawer() {
  const btnRef = useRef<HTMLDivElement>(null)
  const playerHandleRef = useRef<PlayerHandle>(null)
  const opacityRef = useRef<'enabled' | 'to-disabled' | 'disabled'>('enabled')
  const runningRef = useRef(false)
  const onEventRef = useRef<(event: PlayerEvent) => void>(null)
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const [state, setState] = useState<PlayerState>({ player: 'media-chrome', src: undefined })

  const onSettingsInit = (settings?: Settings) => {
    if (!settings) return
    setState({ player: settings.player, src: settings.src })
  }

  const onClose = () => setDrawerIsOpen(false)

  const player = useMemo(() => {
    const shouldDisable = state.player === 'youtube' && !state.src
    if (shouldDisable) {
      if (opacityRef.current === 'enabled') {
        opacityRef.current = 'to-disabled'
      }
    }

    playerHandleRef.current?.onEnd(() => {
      if (!onEventRef.current) return
      if (runningRef.current) {
        onEventRef.current('next')
      }
    })

    return <VideoPlayer player={state.player} src={state.src} fullPage playerHandleRef={playerHandleRef} />
  }, [state.player, state.src])

  useEffect(() => {
    function onPointerMove(e: PointerEvent) {
      if (!btnRef.current) return
      switch (opacityRef.current) {
        case 'enabled': {
          const position = btnRef.current.getBoundingClientRect()
          const center = { x: position.left + position.width / 2, y: position.top + position.height / 2 }
          const radius = 100
          const centerDistance = Math.sqrt(Math.pow(center.x - e.clientX, 2) + Math.pow(center.y - e.clientY, 2))
          const realDistance = centerDistance - radius
          const distance = realDistance < 0 ? 0 : realDistance
          // const opacity = Math.max(1 - distance / 200, 0).toFixed(3)
          const opacity = distance > 200 ? 0 : 1
          btnRef.current.style.setProperty('opacity', opacity.toString())
          break
        }
        case 'to-disabled': {
          opacityRef.current = 'disabled'
          btnRef.current.style.setProperty('opacity', '1')
          break
        }
        case 'disabled':
          return
      }
    }
    window.addEventListener('pointermove', onPointerMove)
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])

  const onCommand = useCallback(({ type, payload }: Command) => {
    switch (type) {
      case 'play':
        if (!playerHandleRef.current) throw new Error('playerHandleRef is null')
        if (playerHandleRef.current.isPlaying()) {
          playerHandleRef.current.pause()
          runningRef.current = false
        } else {
          playerHandleRef.current.play()
          runningRef.current = true
        }
        setState({ player: payload.player, src: payload.src })
        break
      case 'next':
        if (!playerHandleRef.current) throw new Error('playerHandleRef is null')
        if (!playerHandleRef.current.isPlaying()) {
          playerHandleRef.current.play()
          runningRef.current = true
        }
        setState({ player: payload.player, src: payload.src })
        break
      case 'previous':
        if (!playerHandleRef.current) throw new Error('playerHandleRef is null')
        if (!playerHandleRef.current.isPlaying()) {
          playerHandleRef.current.play()
          runningRef.current = true
        }
        setState({ player: payload.player, src: payload.src })
        break
      case 'fullscreen':
        if (!playerHandleRef.current) throw new Error('playerHandleRef is null')
        playerHandleRef.current.fullscreen()
        break
    }
  }, [])

  return (
    <Box>
      <Box bg="gray.100" w="100vw" h="100vh">
        {player}
      </Box>

      <Box ref={btnRef} transition="opacity 0.5s" position="fixed" top="4" right="4">
        <IconButton
          icon={<SettingsIcon />}
          aria-label="Menu"
          variant="ghost"
          colorScheme="blue"
          size="lg"
          onClick={() => setDrawerIsOpen(true)}
        />
      </Box>

      <PlayerDrawer
        isOpen={drawerIsOpen}
        onClose={onClose}
        state={state}
        onSave={(newState) => setState((prev) => ({ ...prev, ...newState }))}
        onSettingsInit={onSettingsInit}
        onCommand={onCommand}
        onEventRef={onEventRef}
      />
    </Box>
  )
}

type Action<T, P = undefined> = P extends undefined ? { type: T; payload?: undefined } : { type: T; payload: P }

type Command =
  | Action<'play', PlaylistItem>
  | Action<'next', PlaylistItem>
  | Action<'previous', PlaylistItem>
  | Action<'fullscreen'>

type PlayerEvent = 'play-pause' | 'next' | 'previous' | 'fullscreen' | 'import' | 'export'

type PageDrawerProps = {
  state: PlayerState
  isOpen: boolean
  onClose: () => void
  onSave: (state: PlayerState) => void
  onSettingsInit: (settings?: Settings) => void
  onCommand: (command: Command) => void
  onEventRef?: RefObject<(event: PlayerEvent) => void>
}

function PlayerDrawer({ state, onSave, isOpen, onClose, onSettingsInit, onCommand, onEventRef }: PageDrawerProps) {
  const toast = useToast()
  const addButtonRef = useRef<HTMLButtonElement>(null)
  const inputFileRef = useRef<HTMLInputElement>(null)
  const [addToPlaylistIsOpen, setAddToPlaylistIsOpen] = useState(false)
  const [youtubeModalIsOpen, setYoutubeModalIsOpen] = useState(false)
  const [settings, setSettings] = useStateStorage<Settings>(
    'settings',
    {
      player: 'media-chrome',
      src: undefined,
      current: 0,
      playlist: [],
    },
    { onInit: onSettingsInit },
  )

  const alert = useMemo(
    () => ({
      error: (title: string) => toast({ status: 'error', title, isClosable: true }),
      warning: (title: string) => toast({ status: 'warning', title, isClosable: true }),
      success: (title: string) => toast({ status: 'success', title, isClosable: true }),
    }),
    [toast],
  )

  function updateSetting(partialSettings: Partial<Settings>) {
    setSettings((prev) => ({ ...prev, ...partialSettings }))
  }

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
        .then(() => alert.success('Playlist imported'))
        .catch((e: Error) => alert.error('Invalid file: ' + e.message))
    }
  }

  const onEvent = useCallback(
    (event: PlayerEvent) => {
      setSettings((settings) => {
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
          alert.success('Playlist exported')
        }

        switch (event) {
          case 'play-pause':
            if (settings.playlist.length > 0) {
              const item = settings.playlist[settings.current]
              onCommand({ type: 'play', payload: item })
              if (settings.src !== item.src || settings.player !== item.player) {
                console.log('play-pause', item)
                return { ...settings, src: item.src, player: item.player }
              } else {
                return settings
              }
            } else {
              alert.warning('Playlist is empty')
            }
            break
          case 'next':
            if (settings.current < settings.playlist.length - 1) {
              const item = settings.playlist[settings.current + 1]
              onCommand({ type: 'next', payload: item })
              return { ...settings, src: item.src, player: item.player, current: settings.current + 1 }
            } else {
              alert.warning('You are at the end of the playlist')
            }
            break
          case 'previous':
            if (settings.current > 0) {
              const item = settings.playlist[settings.current - 1]
              onCommand({ type: 'previous', payload: item })
              return { ...settings, src: item.src, player: item.player, current: settings.current - 1 }
            } else {
              alert.warning('You are at the beginning of the playlist')
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
    [alert, onCommand, setSettings],
  )

  useImperativeHandle(onEventRef, () => onEvent)

  useEffect(() => {
    let lock = false
    function onKeyDown(e: KeyboardEvent) {
      if (document.activeElement && document.activeElement.tagName === 'INPUT') return
      if (e.ctrlKey || e.altKey || e.metaKey) return
      if (lock) return
      lock = true
      setTimeout(() => (lock = false), 100)
      switch (e.key) {
        case 'K':
          onEvent('play-pause')
          break
        case 'L':
          onEvent('next')
          break
        case 'J':
          onEvent('previous')
          break
        case 'I':
          onEvent('import')
          break
        case 'E':
          onEvent('export')
          break
        case 'F':
          onEvent('fullscreen')
          break
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onEvent])

  const hasSelected = settings.playlist.some((item) => item.src === settings.src)

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" size="md" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Settings</DrawerHeader>

          <DrawerBody>
            <Box as="section" mb={4}>
              <Heading as="h4" size="md" mb={2}>
                Player
              </Heading>
              <PlayerSelect
                value={settings.player}
                onChange={(e) => updateSetting({ player: e.target.value as any })}
              />
              <PlayerInput
                value={settings.src}
                onChange={(e) => updateSetting({ src: e.target.value as any })}
                placeholder="Video source"
              />
            </Box>
            <Box as="section" position="relative">
              <Box position="absolute" top="0" right="0" mt={-1}>
                {hasSelected && (
                  <IconButton
                    icon={<DeleteIcon />}
                    aria-label="Delete to playlist"
                    variant="ghost"
                    colorScheme="red"
                    size="sm"
                    onClick={() =>
                      updateSetting({
                        playlist: settings.playlist.filter((it) => it.src !== settings.src),
                        src: state.src,
                      })
                    }
                  />
                )}
                <IconButton
                  ref={addButtonRef}
                  icon={<AddIcon />}
                  aria-label="Add to playlist"
                  variant="ghost"
                  colorScheme="blue"
                  size="sm"
                  onClick={() => setAddToPlaylistIsOpen(true)}
                />
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    aria-label="Playlist options"
                    size="sm"
                    colorScheme="gray"
                    variant="outline"
                  />
                  <MenuList>
                    <MenuItem
                      command="⇧K"
                      onClick={() => onEvent('play-pause')}
                      disabled={settings.playlist.length === 0}
                    >
                      Play / Pause
                    </MenuItem>
                    <MenuItem
                      command="⇧L"
                      onClick={() => onEvent('next')}
                      disabled={!(settings.current < settings.playlist.length - 1)}
                    >
                      Next
                    </MenuItem>
                    <MenuItem command="⇧J" onClick={() => onEvent('previous')} disabled={!(settings.current > 0)}>
                      Previous
                    </MenuItem>
                    <MenuItem command="⇧I" onClick={() => onEvent('import')}>
                      Import
                    </MenuItem>
                    <MenuItem command="⇧E" onClick={() => onEvent('export')} disabled={settings.playlist.length === 0}>
                      Export
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
              <Heading as="h4" size="md" mb={2}>
                Playlist
              </Heading>
              <VStack as="ol" listStyleType="none" overflow="auto" maxH="calc(56px * 10)">
                {settings.playlist.map((item, index) => {
                  const selected = item.src === settings.src
                  return (
                    <Box as="li" w="100%" key={'playlist-item-' + index + '/' + item.src}>
                      <Button
                        size="lg"
                        w="100%"
                        px={4}
                        borderRadius="none"
                        justifyContent="flex-start"
                        bg={selected ? 'red.500' : undefined}
                        colorScheme={selected ? 'red' : undefined}
                        onClick={() =>
                          updateSetting(selected ? { src: state.src, current: 0 } : { src: item.src, current: index })
                        }
                      >
                        <Tooltip label={item.title} placement="top">
                          <Text overflow="hidden" textOverflow="ellipsis">
                            {index + 1}. {item.title}
                          </Text>
                        </Tooltip>
                      </Button>
                    </Box>
                  )
                })}
              </VStack>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                const shouldOpenYoutubeModal = isYoutubeUrl(settings.src || '') && settings.player !== 'youtube'
                if (shouldOpenYoutubeModal) {
                  setYoutubeModalIsOpen(true)
                } else {
                  onSave(settings)
                  onClose()
                }
              }}
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <YoutubeUrlDetectedModal
        url={settings?.src || ''}
        isOpen={youtubeModalIsOpen}
        onClose={(event) => {
          if (!settings) {
            throw new Error('settingsState is null')
          }
          setYoutubeModalIsOpen(false)
          switch (event) {
            case 'confirmed':
              updateSetting({ player: 'youtube' })
              onClose()
              break
            case 'denied':
              onClose()
              break
          }
        }}
      />
      <AddToPlaylistModal
        finalFocusRef={addButtonRef}
        isOpen={addToPlaylistIsOpen}
        onClose={(event, item) => {
          switch (event) {
            case 'confirmed':
              updateSetting({ playlist: settings.playlist.concat(item!) })
              break
          }
          setAddToPlaylistIsOpen(false)
        }}
      />
      <input
        ref={inputFileRef}
        type="file"
        accept="application/json"
        style={{ display: 'none' }}
        onChange={(e) => importPlayerData(e.target.files?.[0])}
      />
    </>
  )
}

type YoutubeUrlDetectedModalProps = {
  url: string
  isOpen: boolean
  onClose: (event: 'confirmed' | 'denied' | 'closed') => void
}

function YoutubeUrlDetectedModal({ url, isOpen, onClose }: YoutubeUrlDetectedModalProps) {
  return (
    <Modal
      isCentered
      onClose={() => onClose('closed')}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size="md"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bgColor="red" color="white">
          Youtube URL detected
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody textAlign="center">
          The current URL is a Youtube URL.
          <br />
          Do you want to use the Youtube player instead?
          <br />
          <Box mt={2}>
            <Link color="blue" href={url}>
              {url}
            </Link>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button autoFocus colorScheme="blue" onClick={() => onClose('confirmed')}>
            Yes
          </Button>
          <Button colorScheme="red" mx={3} onClick={() => onClose('denied')}>
            No
          </Button>
          <Button variant="outline" onClick={() => onClose('closed')}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

function isYoutubeUrl(url: string) {
  return url.includes('youtube') || url.includes('youtu.be')
}

type Errors<T extends string> = {
  [key in T]?: string | null
}

const INITIAL_ITEM: PlaylistItem = {
  player: 'youtube',
  src: '',
  title: '',
}
const INITIAL_ERRORS: Errors<keyof PlaylistItem> = {
  src: null,
  title: null,
}

type AddToPlaylistModalProps = {
  isOpen: boolean
  onClose: (event: 'confirmed' | 'closed', item?: PlaylistItem) => void
  finalFocusRef?: React.RefObject<HTMLElement>
}

function AddToPlaylistModal({ isOpen, onClose, finalFocusRef }: AddToPlaylistModalProps) {
  const videoSourceRef = useRef<HTMLInputElement>(null)
  const [item, setItem] = useState(INITIAL_ITEM)
  const [errors, setErrors] = useState(INITIAL_ERRORS)

  function updateItem(partialItem: Partial<PlaylistItem>) {
    setItem((prev) => ({ ...prev, ...partialItem }))
    setErrors(INITIAL_ERRORS)
  }

  function onCloseAndReset(event: 'confirmed' | 'closed', item?: PlaylistItem) {
    setItem(INITIAL_ITEM)
    setErrors(INITIAL_ERRORS)
    onClose(event, item)
  }

  useEffect(() => {
    if (isOpen) {
      videoSourceRef.current?.focus()
    }
  }, [isOpen])

  return (
    <Modal
      isCentered
      onClose={() => onCloseAndReset('closed')}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size="md"
      scrollBehavior="inside"
      finalFocusRef={finalFocusRef}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bgColor={item.player === 'youtube' ? 'red' : 'blue'} color="white">
          Add to Playlist
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody textAlign="center">
          <FormControl as="fieldset" isInvalid={!!errors.src} mb={2}>
            <FormLabel as="legend">Video source</FormLabel>
            <PlayerInput
              ref={videoSourceRef}
              value={item.src}
              onChange={(e) => updateItem({ src: e.target.value })}
              placeholder="Video source"
            />
            {errors.src && <FormErrorMessage>{errors.src}</FormErrorMessage>}
          </FormControl>
          <FormControl as="fieldset" isInvalid={!!errors.title} mb={2}>
            <FormLabel as="legend">Title</FormLabel>
            <PlayerInput
              value={item.title}
              onChange={(e) => updateItem({ title: e.target.value })}
              placeholder="Title"
            />
            {errors.title && <FormErrorMessage>{errors.title}</FormErrorMessage>}
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel as="legend">Player</FormLabel>
            <PlayerSelect value={item.player} onChange={(e) => updateItem({ player: e.target.value as any })} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            onClick={() => {
              const newErrors: typeof errors = {}
              let hasError = false
              if (item.title.length === 0) {
                hasError = true
                newErrors.title = 'Title is required'
              }
              if (item.src.length === 0) {
                hasError = true
                newErrors.src = 'Video source is required'
              }
              if (hasError) {
                setErrors(newErrors)
                return
              }
              onCloseAndReset('confirmed', item)
            }}
          >
            Save
          </Button>
          <Button variant="outline" onClick={() => onCloseAndReset('closed')}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

const players: PlayerKind[] = ['media-chrome', 'video-js', 'youtube']

type SelectPlayerProps = {
  value: PlayerKind
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

function PlayerSelect({ value, onChange }: SelectPlayerProps) {
  return (
    <Select value={value} onChange={onChange} variant="filled" mb={2} size="lg">
      {players.map((player) => (
        <option key={'select-option-' + player} value={player}>
          {player}
        </option>
      ))}
    </Select>
  )
}

type PlayerInputProps = {
  value: string | undefined
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string
  isInvalid?: boolean
  autoFocus?: boolean
}

const PlayerInput = forwardRef(
  (
    { value, onChange, placeholder, isInvalid, autoFocus }: PlayerInputProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <Input
        ref={ref}
        autoFocus={autoFocus}
        isInvalid={isInvalid}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        size="lg"
        variant="filled"
      />
    )
  },
)

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
