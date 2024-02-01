export function NoteItem({id, title ,content, onPin , pin, deleteTodo}) {
    
    return <>
            <p>{title}</p>
            <p>{content}</p>
            {pin === false ? (
                <button onClick={() => onPin(id)}>Pin</button>
            ) : (
                <button onClick={() => onPin(id)}>Unpin</button>
            )}
            <button onClick={() => deleteTodo(id)}>Delete</button>
    </>
}