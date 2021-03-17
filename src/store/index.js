import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import todosReducer from 'features/todosSlice'
import { selectedTodoSlice } from 'features/todosSlice'
import expensesReducer from 'features/expensesSlice'
import notesReducer from 'features/notesSlice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistTodosConfig = {
  key: 'todoslist',
  storage,
}

const persistExpensesConfig = {
  key: 'expenses',
  storage,
}

const persistNotesConfig = {
  key: 'notes',
  storage,
}

const persistedTodosReducer = persistReducer(
  persistTodosConfig,
  todosReducer,
)

const persistedExpensesReducer = persistReducer(
  persistExpensesConfig,
  expensesReducer,
)

const persistedNotesReducer = persistReducer(
  persistNotesConfig,
  notesReducer,
)

const reducer = combineReducers({
  todos: persistedTodosReducer,
  selectedTodo: selectedTodoSlice.reducer,
  expenses: persistedExpensesReducer,
  notes: persistedNotesReducer,
})

const middleware = [...getDefaultMiddleware({ serializableCheck: false }), logger]

const store = configureStore({
  reducer,
  middleware,
})

export default store
