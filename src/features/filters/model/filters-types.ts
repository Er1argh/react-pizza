import { Sort } from '../../sort/model/sort-types'

export interface FiltersSliceState {
  categoryId: number
  sort: Sort
  currentPage: number
}
