import { AddIcon, DeleteIcon, SettingsIcon } from '@chakra-ui/icons'
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
} from '@chakra-ui/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { VideoPlayer, PlayerKind } from '../../components/VideoPlayer'
import useStateStorage from '../../hooks/useStateStorage'
import { checkArray, checkObject, TypeCheck } from '../../lib/type-check'

type PlaylistItem = {
  src: string
  title: string
  player: PlayerKind
}

type Settings = {
  player: PlayerKind
  src: string | undefined
  playlist: PlaylistItem[]
}

export default function PlayerWithDrawer() {
  const toast = useToast()
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const [youtubeModalIsOpen, setYoutubeModalIsOpen] = useState(false)
  const opacityRef = useRef<'enabled' | 'to-disabled' | 'disabled'>('enabled')
  const [settingsState, setSettingsState] = useState<Settings | null>(null)
  const [settings, setSettings] = useStateStorage<Settings>('settings', {
    player: 'media-chrome',
    src: undefined,
    playlist: [],
  })
  const btnRef = useRef<HTMLDivElement>(null)
  const inputFileRef = useRef<HTMLInputElement>(null)

  const showError = (title: string) => toast({ status: 'error', title, isClosable: true })
  const showSuccess = (title: string) => toast({ status: 'success', title, isClosable: true })
  const onClose = () => setDrawerIsOpen(false)

  const player = useMemo(() => {
    const shouldDisable = settings.player === 'youtube' && !settings.src
    if (shouldDisable) {
      if (opacityRef.current === 'enabled') {
        opacityRef.current = 'to-disabled'
      }
    }
    return <VideoPlayer player={settings.player} src={settings.src} fullPage />
  }, [settings.player, settings.src])

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

  function importPlayerData(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const fileData = e.target?.result
        const content = typeof fileData === 'string' ? fileData : ''
        try {
          const newSettings = JSON.parse(content) as unknown
          if (checkObject(newSettings, settingsTypeCheck)) {
            setSettings(newSettings)
            onClose()
            showSuccess('Player data imported')
          } else {
            showError('Invalid file')
          }
        } catch (e: any) {
          showError('Invalid file: ' + e.message)
        }
      }
      reader.readAsText(file)
    }
  }

  function exportPlayerData() {
    const fileName = 'player.json'
    const data = JSON.stringify(settings)
    const blob = new Blob([data], { type: 'application/json' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    link.click()

    URL.revokeObjectURL(url)
    showSuccess('Player data exported')
  }

  return (
    <Box>
      <Box bg="gray.100" w="100vw" h="100vh">
        {player}
      </Box>

      <Box ref={btnRef} transition="opacity 0.5s" position="fixed" top="4" right="4">
        <IconButton
          icon={<SettingsIcon />}
          aria-label="Menu"
          variant="outline"
          colorScheme="blue"
          size="lg"
          onClick={() => setDrawerIsOpen(true)}
        />
      </Box>
      <PlayerDrawer
        isOpen={drawerIsOpen}
        onClose={onClose}
        settings={settings}
        onSave={(newSettings) => {
          const shouldOpenYoutubeModal = isYoutubeUrl(newSettings.src || '') && newSettings.player !== 'youtube'
          if (shouldOpenYoutubeModal) {
            setYoutubeModalIsOpen(true)
            setSettingsState(newSettings)
          } else {
            setSettings(newSettings)
            onClose()
          }
        }}
        onClickExport={exportPlayerData}
        onClickImport={() => inputFileRef.current?.click()}
      />
      <YoutubeUrlDetectedModal
        url={settingsState?.src || ''}
        isOpen={youtubeModalIsOpen}
        onClose={(event) => {
          if (!settingsState) {
            throw new Error('settingsState is null')
          }
          setYoutubeModalIsOpen(false)
          switch (event) {
            case 'confirmed':
              setSettings({ ...settingsState, player: 'youtube' })
              onClose()
              break
            case 'denied':
              setSettings(settingsState)
              onClose()
              break
          }
          setSettingsState(null)
        }}
      />
      <input
        ref={inputFileRef}
        type="file"
        accept="application/json"
        style={{ display: 'none' }}
        onChange={importPlayerData}
      />
    </Box>
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
}

function PlayerInput({ value, onChange, placeholder, isInvalid }: PlayerInputProps) {
  return (
    <Input
      isInvalid={isInvalid}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      size="lg"
      variant="filled"
    />
  )
}

type PageDrawerProps = {
  isOpen: boolean
  onClose: () => void
  settings: Settings
  onSave: (settings: Settings) => void
  onClickExport: () => void
  onClickImport: () => void
}

function PlayerDrawer({ settings, onSave, isOpen, onClose, onClickExport, onClickImport }: PageDrawerProps) {
  const [addToPlaylistIsOpen, setAddToPlaylistIsOpen] = useState(false)
  const [settingsState, setSettingsState] = useState<Settings>(settings)

  function updateSettingState(partialSettings: Partial<Settings>) {
    setSettingsState((prev) => ({ ...prev, ...partialSettings }))
  }

  useEffect(() => setSettingsState(settings), [settings])

  const hasSelected = settingsState.playlist?.some((item) => item.src === settingsState.src)

  return (
    <>
      <AddToPlaylistModal
        isOpen={addToPlaylistIsOpen}
        onClose={(event, item) => {
          switch (event) {
            case 'confirmed':
              updateSettingState({ playlist: settingsState.playlist.concat(item!) })
              break
          }
          setAddToPlaylistIsOpen(false)
        }}
      />
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
                value={settingsState.player}
                onChange={(e) => updateSettingState({ player: e.target.value as any })}
              />
              <PlayerInput
                value={settingsState.src}
                onChange={(e) => updateSettingState({ src: e.target.value as any })}
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
                      updateSettingState({
                        playlist: settingsState.playlist.filter((it) => it.src !== settingsState.src),
                        src: settings.src,
                      })
                    }
                  />
                )}
                <IconButton
                  icon={<AddIcon />}
                  aria-label="Add to playlist"
                  variant="ghost"
                  colorScheme="blue"
                  size="sm"
                  onClick={() => setAddToPlaylistIsOpen(true)}
                />
              </Box>
              <Heading as="h4" size="md" mb={2}>
                Playlist
              </Heading>
              <VStack as="ol" listStyleType="none">
                {settingsState.playlist.map((item, index) => {
                  const selected = item.src === settingsState.src
                  return (
                    <Box as="li" w="100%" key={'playlist-item-' + index + '/' + item.src}>
                      <Button
                        size="lg"
                        w="100%"
                        borderRadius="none"
                        justifyContent="flex-start"
                        bg={selected ? 'red.500' : undefined}
                        colorScheme={selected ? 'red' : undefined}
                        onClick={() => updateSettingState({ src: selected ? settings.src : item.src })}
                      >
                        <Tooltip label={item.title} placement="top">
                          <Text overflow="hidden" textOverflow="ellipsis">
                            {item.title}
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
            <Button colorScheme="green" mr={3} onClick={() => onClickExport()}>
              Export
            </Button>
            <Button colorScheme="green" mr={3} onClick={() => onClickImport()}>
              Import
            </Button>
          </DrawerFooter>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={() => onSave(settingsState)}>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
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

type AddToPlaylistModalProps = {
  isOpen: boolean
  onClose: (event: 'confirmed' | 'closed', item?: PlaylistItem) => void
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

function AddToPlaylistModal({ isOpen, onClose }: AddToPlaylistModalProps) {
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

  return (
    <Modal
      isCentered
      onClose={() => onCloseAndReset('closed')}
      isOpen={isOpen}
      motionPreset="slideInBottom"
      size="md"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bgColor={item.player === 'youtube' ? 'red' : 'blue'} color="white">
          Add to Playlist
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody textAlign="center">
          <FormControl as="fieldset" isInvalid={!!errors.title} mb={2}>
            <FormLabel as="legend">Title</FormLabel>
            <PlayerInput
              value={item.title}
              onChange={(e) => updateItem({ title: e.target.value })}
              placeholder="Title"
            />
            {errors.title && <FormErrorMessage>{errors.title}</FormErrorMessage>}
          </FormControl>
          <FormControl as="fieldset" isInvalid={!!errors.src} mb={2}>
            <FormLabel as="legend">Video source</FormLabel>
            <PlayerInput
              value={item.src}
              onChange={(e) => updateItem({ src: e.target.value })}
              placeholder="Video source"
            />
            {errors.src && <FormErrorMessage>{errors.src}</FormErrorMessage>}
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel as="legend">Player</FormLabel>
            <PlayerSelect value={item.player} onChange={(e) => updateItem({ player: e.target.value as any })} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            autoFocus
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

const playlistItemTypeCheck: TypeCheck<PlaylistItem> = {
  player: (it) => typeof it === 'string' && players.includes(it as PlayerKind),
  src: (it) => typeof it === 'string',
  title: (it) => typeof it === 'string',
}

const settingsTypeCheck: TypeCheck<Settings> = {
  player: (it) => typeof it === 'string' && players.includes(it as PlayerKind),
  src: (it) => typeof it === 'string' || typeof it === 'undefined',
  playlist: (it) => checkArray(it, playlistItemTypeCheck),
}
