
import { useState,useEffect } from 'react'
import './App.css'
import AddNote from './component/Notes/AddNote'
import { NoteList } from './component/Notes/NoteList';

function App() {
  const [todos,setTodos] = useState(()=> {
    const localValue = localStorage.getItem("NOTES")
    if (localValue == null) return []

    return JSON.parse(localValue)
  });

  useEffect(()=> {
    localStorage.setItem("NOTES", JSON.stringify(todos))
  },[todos])

  function addTodo(title, content){
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, content, pin: false},
      ]
    }
    )
  }

  function onPin (id, pin) {
    const modify = todos.filter(todo => todo.id === id)[0]
    const newModify = {...modify, pin: !modify.pin}
    setTodos(currentTodos => {
        return currentTodos.map(todo =>{
          if (todo.id === id){
            return {...todo, ...newModify}
          }
          return todo
        })
      })
}

  function deleteTodo(id){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)
      
    }
   )
  }

  return (
    <>
      <AddNote onSubmit={addTodo}/>
      <NoteList todos={todos} deleteTodo={deleteTodo} onPin={onPin} />

    </>
  )
}

export default App
