import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const mockInitialState = [
  {
    id: nanoid(),
    desc: 'Go for a run',
    category: 'Sport',
    isComplete: false,
  },
  {
    id: nanoid(),
    desc: 'Go shopping',
    category: 'Life',
    isComplete: false,
  },
  {
    id: nanoid(),
    desc: 'Build chat application',
    category: 'Work',
    isComplete: false,
  },
]

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    tasks: mockInitialState,
  },
  reducers: {
    addNewTodo: {
      reducer: (state, { payload }) => {
        state.tasks.push(payload)
      },
      prepare: ({ desc, category, date }) => ({
        payload: {
          id: nanoid(),
          desc,
          category,
          date,
          isComplete: false,
        },
      }),
    },
    editTodo: (state, { payload }) => {
      const todoToEdit = state.tasks.find((todo) => todo.id === payload.id)
      if (todoToEdit) {
        todoToEdit.desc = payload.desc
      }
    },
    toggleTodo: (state, { payload }) => {
      const todoToToggle = state.tasks.find((todo) => todo.id === payload.id)
      if (todoToToggle) {
        todoToToggle.isComplete = !todoToToggle.isComplete
      }
    },
    removeTodo: (state, { payload }) => {
      const index = state.tasks.findIndex((todo) => todo.id === payload.id)
      if (index !== -1) {
        state.tasks.splice(index, 1)
      }
    },
  },
})

export const selectedTodoSlice = createSlice({
  name: 'selectedTodo',
  initialState: null,
  reducers: {
    select: (state, { payload }) => payload.id,
  },
})

export const { addNewTodo, editTodo, toggleTodo, removeTodo } = todosSlice.actions
export const { select: selectTodoActionCreator } = selectedTodoSlice.actions

export const selectTodos = (state) => state.todos.tasks

export default todosSlice.reducer
