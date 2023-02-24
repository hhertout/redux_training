import React, { SyntheticEvent, useRef} from "react"
import { useAppDispatch } from "../app/hooks"
import {v4 as uuid} from "uuid"
import { add } from "../store/features/Todos/toDosSlice"

export default function AddTodo() {
  const dispatch = useAppDispatch()

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const target = inputRef.current!
    const newTodo = { id: uuid(), todo: target.value }

    dispatch(add(newTodo))

    target.value = ""
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button>Add</button>
      </form>
    </div>
  )
}
