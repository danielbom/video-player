import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from '@chakra-ui/react'
import { useRef } from 'react'

export type AlertDeleteAllProps = {
  isOpen: boolean
  onClose: (event: 'confirmed' | 'denied' | 'closed') => void
}

export function AlertDeleteAll({ isOpen, onClose }: AlertDeleteAllProps) {
  const cancelRef = useRef<HTMLButtonElement>(null)

  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={() => onClose('closed')}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete All Items
          </AlertDialogHeader>

          <AlertDialogBody>Are you sure you want to delete all items? This action cannot be undone.</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={() => onClose('denied')}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={() => onClose('confirmed')} ml={3}>
              Delete All
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
