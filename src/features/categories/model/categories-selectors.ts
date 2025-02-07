import { RootState } from '../../../shared/types/store'

export const selectCategory = (state: RootState) => {
  return state.category.categoryId
}
