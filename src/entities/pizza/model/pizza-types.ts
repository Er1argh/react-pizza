export interface PizzaItem {
  id: string
  title: string
  price: number
  imageUrl: string
  sizes: number[]
  types: number[]
}

export interface FetchPizzaArgs {
  currentPage: number
  categoryId: number
  sortBy: string
  order: string
  searchValue: string
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzaSliceState {
  items: PizzaItem[]
  status: Status
}
