import React, { SyntheticEvent } from "react"
import { useDispatch } from "react-redux"
import { remove } from "../store/features/Todos/toDosSlice"

type Props = {
    id: string
  todo: string
}

export default function ToDoItem({ id, todo }: Props) {
    const dispatch = useDispatch()

  const handleDelClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(remove(id))
  }

  return (
    <li>
      <span>{todo}</span>
      <button onClick={handleDelClick}>X</button>
    </li>
  )
}
