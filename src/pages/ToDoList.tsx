import { useAppSelector } from "../app/hooks"
import ToDoItem from "../components/ToDoItem"
import type { Todo } from "../store/features/Todos/toDosSlice"
import AddTodo from "../components/AddTodo"

export default function ToDoList() {
  const todos = useAppSelector(state => state.todos.value)

  return (
    <div>
      <ul>
        {todos.map((todo: Todo | undefined) => {
          if (todo) {
            return <ToDoItem key={todo.id} id={todo.id} todo={todo.todo} />
          }
        })}
      </ul>

      <AddTodo />
    </div>
  )
}
