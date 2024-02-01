import { useState, useEffect } from 'react';
import './App.css';
import AddNote from './component/Notes/AddNote';
import { NoteList } from './component/Notes/NoteList';
import { ChakraProvider, Text, useToast, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Button } from '@chakra-ui/react';

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("NOTES");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("NOTES", JSON.stringify(todos));
  }, [todos]);

  const toast = useToast();
  const [deleteAlert, setDeleteAlert] = useState();
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  function addTodo(title, content) {
    setTodos(currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, content, pin: false },
    ]);
  }

  function onPin(id) {
    setTodos(currentTodos => {
      const modifiedTodos = currentTodos.map(todo => {
        if (todo.id === id) {
          const newPinValue = !todo.pin;

          // Show a toast notification
          toast({
            title: newPinValue ? 'Note Pinned' : 'Note Unpinned',
            description: `Note "${todo.title}" has been ${newPinValue ? 'pinned' : 'unpinned'}.`,
            status: 'info',
            position: 'bottom-right',
            duration: 3000,
            isClosable: true,
          });

          return { ...todo, pin: newPinValue };
        }
        return todo;
      });

      return modifiedTodos;
    });
  }

  function deleteTodoAlert(id) {
    setSelectedNoteId(id);
    setDeleteAlert(true);
  }

  function deleteTodo() {
    setTodos(currentTodos => currentTodos.filter(todo => todo.id !== selectedNoteId));

    // Show a toast notification
    const deletedNote = todos.find(todo => todo.id === selectedNoteId);
    toast({
      title: 'Note Deleted',
      description: `Note "${deletedNote.title}" has been deleted.`,
      status: 'error',
      duration: 3000,
      isClosable: true,
    });

    setDeleteAlert(false);
  }

  function cancelDelete() {
    setDeleteAlert(false);
  }

  return (
    <ChakraProvider>
      <Text fontSize={"4xl"} marginY={2}>Type Your Note Here!</Text>
      <AddNote onSubmit={addTodo} />
      <NoteList todos={todos} deleteTodo={deleteTodoAlert} onPin={onPin} />

      {/* Delete Alert */}
      <AlertDialog
        isOpen={deleteAlert}
        leastDestructiveRef={undefined}
        onClose={cancelDelete}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Note
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete this note? This action cannot be undone.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={cancelDelete}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={deleteTodo} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </ChakraProvider>
  );
}

export default App;
