import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SearchSliceState } from './search-types'

const initialState: SearchSliceState = {
  searchValue: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
  },
})

export const { setSearchValue } = searchSlice.actions

export default searchSlice.reducer
