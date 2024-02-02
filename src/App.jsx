import { useState, useEffect } from 'react';
import './App.css';
import AddNote from './component/Notes/AddNote';
import { NoteList } from './component/Notes/NoteList';
import { Box, ChakraProvider, Text, useToast } from '@chakra-ui/react';
import { Header } from './component/Head/Header';
import DeleteAlert from './component/Notes/DeleteAlert';
import Footer from './component/Footer/Footer';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const filtered = todos.filter(todo =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTodos(filtered);
  }, [todos, searchTerm]);

  function addTodo(title, content) {
    const currentDate = new Date().toLocaleString(); //ngambil date sebagai string
    setTodos(currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, content,date: currentDate, pin: false },
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
      position: 'bottom-right',
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
      <Header onSearchChange={setSearchTerm} />
      <Box padding={'2rem'} paddingX={'6rem'}>
        <Text fontSize={"4xl"} marginY={2}>Type Your Note Here!</Text>
        
        <AddNote onSubmit={addTodo} />
        <NoteList todos={filteredTodos} deleteTodo={deleteTodoAlert} onPin={onPin} />
      </Box>
      {/* Delete Alert */}
      <DeleteAlert isOpen={deleteAlert} onClose={cancelDelete} onDelete={deleteTodo} noteTitle={todos.find(todo => todo.id === selectedNoteId)?.title} />
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
