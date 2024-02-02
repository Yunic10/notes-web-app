import { NoteItem } from "./NoteItem";
import {SimpleGrid, Text} from "@chakra-ui/react";
import PropTypes from 'prop-types'

export function NoteList({ todos, deleteTodo, onPin }) {
  const pinnedNotes = todos.filter(todo => todo.pin);
  const unpinnedNotes = todos.filter(todo => !todo.pin);
  const variant = "outlined";

  NoteList.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    onPin: PropTypes.func.isRequired,
  };
  return (
    <>
        <Text textAlign={'left'} fontSize={"2xl"} marginY={4}>Pinned Note</Text>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' >
        {pinnedNotes.length === 0 ? 
        <Text fontSize={"large"} textAlign={"left"}>No Pinned Note</Text> :
        pinnedNotes.length > 0 && (
            <>
            {pinnedNotes.map(todo => (
                <NoteItem {...todo} key={todo.id} deleteTodo={deleteTodo} onPin={onPin} variant={variant}/>
            ))}
            </>
            )} 
        </SimpleGrid>
        <Text textAlign={'left'} fontSize={"2xl"} marginY={4}>Note</Text>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            {unpinnedNotes.length === 0 ? 
            <Text fontSize={"large"} textAlign={"left"}>No Notes</Text> :
            unpinnedNotes.length > 0 && (
                <>
                {unpinnedNotes.map(todo => (
                    <NoteItem {...todo} key={todo.id} deleteTodo={deleteTodo} onPin={onPin} />
                ))}
                </>
            )}
      </SimpleGrid>
    </>
  );
}
