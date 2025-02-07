import { RootState } from '../../../shared/types/store'

export const selectSearchValue = (state: RootState) => {
  return state.search.searchValue
}
