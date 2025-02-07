import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Sort, sortNameEnum, sortPropertyEnum, SortSliceState } from './sort-types'

const initialState: SortSliceState = {
  sort: { name: sortNameEnum.RATING_DESC, sortProperty: sortPropertyEnum.RATING_DESC },
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload
    },
  },
})

export const { setSort } = sortSlice.actions

export default sortSlice.reducer
