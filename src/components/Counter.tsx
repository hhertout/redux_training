import { useAppSelector, useAppDispatch } from '../app/hooks'
import { increment, decrement } from "../store/features/counter/counterSlice"

export default function Counter() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const handleIncrClick = () => {
    dispatch(increment())
  }

  const handleDecrClick = () => {
    dispatch(decrement())
  }

  return (
    <div>
      <button aria-label="Increment value" onClick={handleIncrClick}>
        Increment
      </button>

      <span>{count}</span>

      <button aria-label="Decrement" onClick={handleDecrClick}>
        Decrement
      </button>
    </div>
  )
}
