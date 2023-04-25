import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos }: any) {
  if (!todos) {
    todos = []
  }
  return (
    todos.map((todo: any) => {
      return <Todo key={todo} todo={todo} />
    })
  )
}
