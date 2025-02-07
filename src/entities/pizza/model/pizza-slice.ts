import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { fetchPizza } from './pizza-thunks'

import { PizzaItem, PizzaSliceState, Status } from './pizza-types'

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
}

export const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<PizzaItem[]>) {
      state.items = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPizza.pending, state => {
        state.items = []
        state.status = Status.LOADING
      })
      .addCase(fetchPizza.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = Status.SUCCESS
      })
      .addCase(fetchPizza.rejected, state => {
        state.items = []
        state.status = Status.ERROR
      })
  },
})

export const { setItems } = pizzasSlice.actions

export default pizzasSlice.reducer
