import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos }: any) {
  return (
    todos.map((todo: any) => {
      return <Todo key={todo} todo={todo} />
    })
  )
}
