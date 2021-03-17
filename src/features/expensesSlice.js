import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const mockInitialState = [
  {
    id: nanoid(),
    amount: -19.99,
    currency: 'PLN',
    desc: 'Spotify premium',
  },
  {
    id: nanoid(),
    amount: -43,
    currency: 'USD',
    desc: 'Headphones RAZER Kraken',
  },
  {
    id: nanoid(),
    amount: 674.99,
    currency: 'USD',
    desc: 'Sell iPhone X 64GB',
  },
  {
    id: nanoid(),
    amount: -23.99,
    currency: 'PLN',
    desc: 'YouTube premium',
  },
]

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {
    transactions: mockInitialState,
  },
  reducers: {
    addTransaction: {
      reducer: (state, { payload }) => {
        state.transactions.push(payload)
      },
      prepare: ({ amount, desc, currency, date }) => ({
        payload: {
          id: nanoid(),
          amount,
          currency,
          desc,
          date,
        },
      }),
    },
    deleteTransaction: (state, { payload }) => {
      const index = state.transactions.findIndex(
        (item) => item.id === payload.id
      )
      if (index !== -1) {
        state.transactions.splice(index, 1)
      }
    },
  },
})

export const { addTransaction, deleteTransaction } = expensesSlice.actions

export const selectTransactions = (state) => state.expenses.transactions

export default expensesSlice.reducer
