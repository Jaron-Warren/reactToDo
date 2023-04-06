import React from 'react'

export default function Todo({ todo }: any) {
  return (
    <label>
      <input type="checkbox" checked={todo.complete} />
      <div>{todo.name}</div>
    </label>
  )
}
