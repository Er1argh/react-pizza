import { createAsyncThunk } from '@reduxjs/toolkit'
import { FiltersSliceState } from './filters-types'

import { setCategoryId } from '../../categories/model/categories-slice'
import { setSort } from '../../sort/model/sort-slice'
import { setCurrentPage } from '../../pagination/model/pagination-slice'

export const setFilters = createAsyncThunk<FiltersSliceState, FiltersSliceState>(
  'filters/setFilters',
  async (filters, { dispatch }) => {
    dispatch(setCategoryId(filters.categoryId))
    dispatch(setSort(filters.sort))
    dispatch(setCurrentPage(filters.currentPage))
    return filters
  },
)
