import { CartItem } from '../../entities/cart/model/cart-types'

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((sum, item) => {
    return item.price * item.count + sum
  }, 0)
}
