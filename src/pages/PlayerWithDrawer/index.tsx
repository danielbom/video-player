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
} from '@chakra-ui/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { VideoPlayer, PlayerKind } from '../../components/VideoPlayer'
import useStateStorage from '../../hooks/useStateStorage'

type Settings = {
  player: PlayerKind
  src: string | undefined
}

export default function PlayerWithDrawer() {
  const opacityRef = useRef<'enabled' | 'changing' | 'disabled'>('enabled')
  const [settings, setSettings] = useStateStorage<Settings>('settings', {
    player: 'media-chrome',
    src: undefined,
  })
  const [isOpen, setIsOpen] = useState(false)
  const btnRef = useRef<HTMLButtonElement>(null)

  const onClose = () => setIsOpen(false)

  const player = useMemo(() => {
    if (!settings.src) {
      if (opacityRef.current === 'enabled') {
        opacityRef.current = 'changing'
      }
    }
    return <VideoPlayer player={settings.player} src={settings.src} fullPage />
  }, [settings.player, settings.src])

  return (
    <Box>
      <Box
        bg="gray.100"
        w="100vw"
        h="100vh"
        onPointerMove={(e) => {
          if (!btnRef.current) return
          switch (opacityRef.current) {
            case 'enabled': {
              const position = btnRef.current.getBoundingClientRect()
              const center = { x: position.left + position.width / 2, y: position.top + position.height / 2 }
              const radius = 100
              const centerDistance = Math.sqrt(Math.pow(center.x - e.clientX, 2) + Math.pow(center.y - e.clientY, 2))
              const realDistance = centerDistance - radius
              const distance = realDistance < 0 ? 0 : realDistance
              const opacity = Math.max(1 - distance / 200, 0).toFixed(3)
              btnRef.current.style.setProperty('opacity', opacity.toString())
              break
            }
            case 'changing': {
              opacityRef.current = 'disabled'
              btnRef.current.style.setProperty('opacity', '1')
              break
            }
            case 'disabled':
              return
          }
        }}
      >
        {player}
      </Box>

      <IconButton
        icon={<HamburgerIcon />}
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
      <PageDrawer isOpen={isOpen} onClose={onClose} settings={settings} onSave={setSettings} />
    </Box>
  )
}

type PageDrawerProps = {
  isOpen: boolean
  onClose: () => void
  settings: Settings
  onSave: (settings: Settings) => void
}

const players: PlayerKind[] = ['media-chrome', 'video-js']

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
          <Button
            colorScheme="blue"
            onClick={() => {
              onSave(settingsState)
              onClose()
            }}
          >
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
