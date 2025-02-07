import { RootState } from '../../../shared/types/store'

export const selectSort = (state: RootState) => {
  return state.sort.sort
}
