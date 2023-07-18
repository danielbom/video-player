import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Link,
  ModalFooter,
  Button,
  Box,
} from '@chakra-ui/react'

export type YoutubeUrlDetectedModalProps = {
  url: string
  isOpen: boolean
  onClose: (event: 'confirmed' | 'denied' | 'closed') => void
}

export function YoutubeUrlDetectedModal({ url, isOpen, onClose }: YoutubeUrlDetectedModalProps) {
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
