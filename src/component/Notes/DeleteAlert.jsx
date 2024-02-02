// DeleteAlert.jsx


import { AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types'

function DeleteAlert({ isOpen, onClose, onDelete, noteTitle }) {
    DeleteAlert.propTypes = {
        isOpen: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
        noteTitle: PropTypes.string.isRequired,
      };
    return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={undefined}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Note
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure you want to delete the note &quot;{noteTitle}&quot;? This action cannot be undone.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={onDelete} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default DeleteAlert;
