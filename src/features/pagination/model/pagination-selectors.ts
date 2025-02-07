import { RootState } from '../../../shared/types/store'

export const selectPagination = (state: RootState) => {
  return state.pagination.currentPage
}
