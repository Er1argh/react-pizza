import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PaginationSliceState } from './pagination-types'

const initialState: PaginationSliceState = {
  currentPage: 1,
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
  },
})

export const { setCurrentPage } = paginationSlice.actions

export default paginationSlice.reducer
