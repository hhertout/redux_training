import { createSlice } from "@reduxjs/toolkit"

interface ToDosState {
  value: Todo[]
}

export type Todo = {
  id: string
  todo: string
}

const initialState: ToDosState = {
  value: [
    {
      id: "1",
      todo: "faire le ménage",
    },

    {
      id: "2",
      todo: "faire les courses",
    },
  ],
}

const toDosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload)
    },
    remove: (state, action) => {
      const key = state.value.findIndex(el => el.id === action.payload)
      console.log("key=>" + key + " payload=> " + action.payload)
      state.value.splice(key, 1)
      return
    },
  },
})

export const { add, remove } = toDosSlice.actions

export default toDosSlice.reducer
