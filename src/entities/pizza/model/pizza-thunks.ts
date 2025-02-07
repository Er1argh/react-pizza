import { createAsyncThunk } from '@reduxjs/toolkit'

import { FetchPizzaArgs, PizzaItem } from './pizza-types'

import PizzaService from '../../../shared/api/pizzaApi'


export const fetchPizza = createAsyncThunk<PizzaItem[], FetchPizzaArgs>('pizzas/fetchPizzas', async params => {
  return PizzaService.getAll(params)
})
