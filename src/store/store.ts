import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import todosReducer from './features/Todos/toDosSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch