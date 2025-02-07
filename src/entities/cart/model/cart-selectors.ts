import { RootState } from '../../../shared/types/store'

export const selectCart = (state: RootState) => {
  return state.cart
}

export const selectCartItemById = (id: string) => (state: RootState) => {
  return selectCart(state).items.find(item => item.id === id)
}
