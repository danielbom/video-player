import { DeleteIcon, AddIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Heading,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
  Button,
  Tooltip,
  DrawerFooter,
  Box,
  Text,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { ModalAddToPlaylist } from './ModalAddToPlaylist'
import { AlertDeleteAll } from './AlertDeleteAll'
import { PageInput } from './PageInput'
import { PageSelect } from './PageSelect'
import { Settings, PlayerState, PlayerEvent } from './types'
import { ModalYoutubeUrlDetected } from './ModalYoutubeUrlDetected'
import { useShortcuts } from './useShortcuts'
import { KEYBOARD_SHORTCUTS } from './shortcuts'

export type PageDrawerProps = {
  settings: Settings
  updateSettings: (settings: Partial<Settings>) => void
  state: PlayerState
  isOpen: boolean
  onClose: () => void
  onSave: (state: PlayerState) => void
  onEvent: (event: PlayerEvent) => void
}

export function PageDrawer({ state, updateSettings, onSave, isOpen, onClose, settings, onEvent }: PageDrawerProps) {
  const addButtonRef = useRef<HTMLButtonElement>(null)
  const deleteAll = useDisclosure()
  const [addToPlaylistIsOpen, setAddToPlaylistIsOpen] = useState(false)
  const [youtubeModalIsOpen, setYoutubeModalIsOpen] = useState(false)
  useShortcuts(KEYBOARD_SHORTCUTS, onEvent)

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
              <PageSelect value={settings.player} onChange={(e) => updateSettings({ player: e.target.value as any })} />
              <PageInput
                value={settings.src}
                onChange={(e) => updateSettings({ src: e.target.value as any })}
                placeholder="Video source"
              />
            </Box>
            <Box as="section">
              <Flex justifyContent="space-between" mb={2}>
                <Heading as="h4" size="md">
                  Playlist
                </Heading>
                <Box>
                  <IconButton
                    icon={<DeleteIcon />}
                    aria-label="Delete to playlist"
                    variant="ghost"
                    colorScheme="red"
                    size="sm"
                    onClick={() => {
                      if (!settings.src) {
                        deleteAll.onOpen()
                      } else {
                        updateSettings({
                          playlist: settings.playlist.filter((it) => it.src !== settings.src),
                          src: state.src,
                        })
                      }
                    }}
                  />
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
                      <MenuItem
                        command="⇧E"
                        onClick={() => onEvent('export')}
                        disabled={settings.playlist.length === 0}
                      >
                        Export
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
              </Flex>
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
                          updateSettings(selected ? { src: undefined, current: -1 } : { src: item.src, current: index })
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
                  onSave({ player: settings.player, src: settings.src })
                  onClose()
                }
              }}
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <ModalYoutubeUrlDetected
        url={settings?.src || ''}
        isOpen={youtubeModalIsOpen}
        onClose={(event) => {
          if (!settings) {
            throw new Error('settingsState is null')
          }
          setYoutubeModalIsOpen(false)
          switch (event) {
            case 'confirmed':
              updateSettings({ player: 'youtube' })
              onSave({ player: 'youtube', src: settings.src })
              onClose()
              break
            case 'denied':
              onSave(settings)
              onClose()
              break
          }
        }}
      />
      <ModalAddToPlaylist
        finalFocusRef={addButtonRef}
        isOpen={addToPlaylistIsOpen}
        onClose={(event, item) => {
          switch (event) {
            case 'confirmed':
              updateSettings({ playlist: settings.playlist.concat(item!) })
              break
          }
          setAddToPlaylistIsOpen(false)
        }}
      />
      <AlertDeleteAll
        isOpen={deleteAll.isOpen}
        onClose={(event) => {
          switch (event) {
            case 'confirmed':
              updateSettings({ playlist: [] })
              break
          }
          deleteAll.onClose()
        }}
      />
    </>
  )
}

function isYoutubeUrl(url: string) {
  return url.includes('youtube') || url.includes('youtu.be')
}
