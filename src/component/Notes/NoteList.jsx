import { NoteItem } from "./NoteItem";

export function NoteList({ todos, deleteTodo, onPin }) {
  const pinnedNotes = todos.filter(todo => todo.pin);
  const unpinnedNotes = todos.filter(todo => !todo.pin);

  return (
    <>
        <h3>Pin</h3>
        {pinnedNotes.length === 0 && "No One Notes Are Pinned"}
      {pinnedNotes.length > 0 && (
        <>
          
          {pinnedNotes.map(todo => (
            <NoteItem {...todo} key={todo.id} deleteTodo={deleteTodo} onPin={onPin} />
          ))}
        </>
      )}
      <h3>Notes</h3>
        {unpinnedNotes.length === 0 && "No Notes"}
      {unpinnedNotes.length > 0 && (
        <>
          
          {unpinnedNotes.map(todo => (
            <NoteItem {...todo} key={todo.id} deleteTodo={deleteTodo} onPin={onPin} />
          ))}
        </>
      )}
    </>
  );
}
