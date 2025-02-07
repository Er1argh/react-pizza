import { CartItem } from '../../entities/cart/model/cart-types'

export const calcTotalCount = (items: CartItem[]) => {
  return items.reduce((sum, item) => {
    return sum + item.count
  }, 0)
}
