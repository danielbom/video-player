import { HamburgerIcon } from '@chakra-ui/icons'
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
} from '@chakra-ui/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { VideoPlayer, PlayerKind } from '../../components/VideoPlayer'
import useStateStorage from '../../hooks/useStateStorage'

type Settings = {
  player: PlayerKind
  src: string | undefined
}

export default function PlayerWithDrawer() {
  const [youtubeModalIsOpen, setYoutubeModalIsOpen] = useState(false)
  const opacityRef = useRef<'enabled' | 'to-disabled' | 'disabled'>('enabled')
  const [settingsState, setSettingsState] = useState<Settings | null>(null)
  const [settings, setSettings] = useStateStorage<Settings>('settings', {
    player: 'media-chrome',
    src: undefined,
  })
  const [isOpen, setIsOpen] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)

  const onClose = () => setIsOpen(false)

  const player = useMemo(() => {
    if (!settings.src) {
      if (opacityRef.current === 'enabled' || settings.player === 'youtube') {
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

  return (
    <Box>
      <Box bg="gray.100" w="100vw" h="100vh">
        {player}
      </Box>

      <IconButton
        icon={<HamburgerIcon />}
        transition="opacity 0.2s"
        aria-label="Menu"
        variant="outline"
        colorScheme="blue"
        size="lg"
        mb={2}
        ref={btnRef}
        onClick={() => setIsOpen(true)}
        position="fixed"
        top="4"
        right="4"
      />
      <PageDrawer
        isOpen={isOpen}
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
    </Box>
  )
}

type PageDrawerProps = {
  isOpen: boolean
  onClose: () => void
  settings: Settings
  onSave: (settings: Settings) => void
}

const players: PlayerKind[] = ['media-chrome', 'video-js', 'youtube']

function PageDrawer({ settings, onSave, isOpen, onClose }: PageDrawerProps) {
  const [settingsState, setSettingsState] = useState<Settings>(settings)

  function updateSettingState(partialSettings: Partial<Settings>) {
    setSettingsState((prev) => ({ ...prev, ...partialSettings }))
  }

  useEffect(() => setSettingsState(settings), [settings])

  return (
    <Drawer isOpen={isOpen} placement="right" size="md" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Settings</DrawerHeader>

        <DrawerBody>
          <Select
            value={settingsState.player}
            onChange={(e) => updateSettingState({ player: e.target.value as any })}
            variant="filled"
            mb={2}
            size="lg"
          >
            {players.map((player) => (
              <option key={'select-option-' + player} value={player}>
                {player}
              </option>
            ))}
          </Select>
          <Input
            value={settingsState.src}
            onChange={(e) => updateSettingState({ src: e.target.value as any })}
            placeholder="Video source"
            size="lg"
            variant="filled"
            flex={4}
          />
        </DrawerBody>

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
