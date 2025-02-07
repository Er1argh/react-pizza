import { RootState } from '../../../shared/types/store'

export const selectPizzas = (state: RootState) => {
  return state.pizza
}
