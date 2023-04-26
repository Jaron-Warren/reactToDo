import { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'
import "./style.css"

function App() {
  const [todos, setTodos] = useState<any[]>([])
  const todoInput: any = useRef()
  const LOCAL_STORAGE_KEY: string = 'todoApp.todos'

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? '')
    if (storedTodos) setTodos( prevTodos => [...prevTodos, ...storedTodos] );
  }, [])

  useEffect(() => {
    console.log(todos)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id: typeof uuidv4) {
    const newTodos = todos ? [...todos] : []
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e: any) {
    const name = todoInput.current.value
    if (name === '') return
    setTodos((prevTodos: any) => {
      return [...prevTodos, { id: crypto.randomUUID(), name: name, complete: false }]
    })
    todoInput.current.value = null
  }

  return (
    <>
      <input ref={todoInput} type="text" />
      <button className='btn' onClick={handleAddTodo}>Add Todo</button>
      <button className='btn'>Clear Completed</button>
      <div>{TodoList.length} left to do</div>
      <TodoList todos={todos} />
    </>
  )
}

export default App
