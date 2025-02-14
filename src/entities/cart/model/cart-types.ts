export interface CartItem {
  id: string
  title: string
  price: number
  imageUrl: string
  type: string
  size: number
  count: number
}

export interface CartSliceState {
  totalPrice: number
  totalCount: number
  items: CartItem[]
}
