import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CartItem, CartSliceState } from './cart-types'

import { calcTotalPrice } from '../../../shared/lib/calc-total-price'
import { calcTotalCount } from '../../../shared/lib/calc-total-count'

const initialState: CartSliceState = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find(item => item.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({ ...action.payload, count: 1 })
      }
      state.totalPrice = calcTotalPrice(state.items)
      state.totalCount = calcTotalCount(state.items)
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find(item => item.id === action.payload)
      if (findItem) {
        findItem.count--
      }
      state.totalPrice = calcTotalPrice(state.items)
      state.totalCount = calcTotalCount(state.items)
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload)
      state.totalPrice = calcTotalPrice(state.items)
      state.totalCount = calcTotalCount(state.items)
    },
    clearItems(state) {
      state.totalPrice = 0
      state.totalCount = 0
      state.items = []
    },
  },
})

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer
