import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { useRef, useState, useEffect } from 'react'
import { PageInput } from './PageInput'
import { PageSelect } from './PageSelect'
import { PlaylistItem } from './types'

export type Errors<T extends string> = {
  [key in T]?: string | null
}

export const INITIAL_ITEM: PlaylistItem = {
  player: 'youtube',
  src: '',
  title: '',
}
export const INITIAL_ERRORS: Errors<keyof PlaylistItem> = {
  src: null,
  title: null,
}

export type ModalAddToPlaylistProps = {
  isOpen: boolean
  onClose: (event: 'confirmed' | 'closed', item?: PlaylistItem) => void
  finalFocusRef?: React.RefObject<HTMLElement>
}

export function ModalAddToPlaylist({ isOpen, onClose, finalFocusRef }: ModalAddToPlaylistProps) {
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
            <PageInput
              ref={videoSourceRef}
              value={item.src}
              onChange={(e) => updateItem({ src: e.target.value })}
              placeholder="Video source"
            />
            {errors.src && <FormErrorMessage>{errors.src}</FormErrorMessage>}
          </FormControl>
          <FormControl as="fieldset" isInvalid={!!errors.title} mb={2}>
            <FormLabel as="legend">Title</FormLabel>
            <PageInput value={item.title} onChange={(e) => updateItem({ title: e.target.value })} placeholder="Title" />
            {errors.title && <FormErrorMessage>{errors.title}</FormErrorMessage>}
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel as="legend">Player</FormLabel>
            <PageSelect value={item.player} onChange={(e) => updateItem({ player: e.target.value as any })} />
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
