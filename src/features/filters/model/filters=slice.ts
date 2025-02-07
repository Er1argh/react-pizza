import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { setFilters } from './filters-thunks'

import { FiltersSliceState } from './filters-types'
import { sortNameEnum, sortPropertyEnum } from '../../sort/model/sort-types'

const initialState: FiltersSliceState = {
  categoryId: 0,
  sort: { name: sortNameEnum.RATING_DESC, sortProperty: sortPropertyEnum.RATING_DESC },
  currentPage: 1,
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setFilters.fulfilled, (state, action: PayloadAction<FiltersSliceState>) => {
      state.categoryId = Number(action.payload.categoryId)
      state.sort = action.payload.sort
      state.currentPage = Number(action.payload.currentPage)
    })
  },
})

export default filtersSlice.reducer
