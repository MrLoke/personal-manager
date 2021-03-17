import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const mockInitialState = [
  {
    id: nanoid(),
    link: 'https://redux-toolkit.js.org/api/createAsyncThunk',
    desc: 'How is work createAsyncThunk in Redux Toolkit',
  },
  {
    id: nanoid(),
    link: 'https://redux-toolkit.js.org/introduction/getting-started',
    desc: 'Elon Musk and his neuralink',
  },
  {
    id: nanoid(),
    link: 'https://redux-toolkit.js.org/introduction/getting-started',
    desc: 'Lorem ipsum dolore sit',
  },
]

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: mockInitialState,
  },
  reducers: {
    addNote: {
      reducer: (state, { payload }) => {
        state.notes.push(payload)
      },
      prepare: ({ link, desc }) => ({
        payload: {
          id: nanoid(),
          link,
          desc,
        },
      }),
    },
    deleteNote: (state, { payload }) => {
      const index = state.notes.findIndex((item) => item.id === payload.id)
      if (index !== -1) {
        state.notes.splice(index, 1)
      }
    },
  },
})

export const { addNote, deleteNote } = notesSlice.actions

export const selectNotes = (state) => state.notes.notes

export default notesSlice.reducer
