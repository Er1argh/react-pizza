import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '../shared/types/store'

import pizzaReducer from '../entities/pizza/model/pizza-slice'
import cartReducer from '../entities/cart/model/cart-slice'
import sortReducer from '../features/sort/model/sort-slice'
import categoryReducer from '../features/categories/model/categories-slice'
import searchReducer from '../features/search/model/search-slice'
import paginationReducer from '../features/pagination/model/pagination-slice'
import filtersReducer from '../features/filters/model/filters=slice'

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    cart: cartReducer,
    sort: sortReducer,
    category: categoryReducer,
    search: searchReducer,
    pagination: paginationReducer,
    filters: filtersReducer,
  },
})

export const useAppDispatch = () => useDispatch<AppDispatch>()
