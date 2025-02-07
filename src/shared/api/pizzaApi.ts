import axios from 'axios'

import { FetchPizzaArgs, PizzaItem } from '../../entities/pizza/model/pizza-types'

const API_URL = 'https://67835ed48b6c7a1316f4316c.mockapi.io/items'

export default class PizzaService {
  static async getAll({ currentPage, categoryId, sortBy, order, searchValue }: FetchPizzaArgs): Promise<PizzaItem[]> {
    const { data } = await axios.get<PizzaItem[]>(API_URL, {
      params: {
        page: currentPage,
        limit: 4,
        ...(categoryId > 0 && { category: categoryId }),
        sortBy,
        order,
        ...(searchValue && { search: searchValue }),
      },
    })
    return data
  }
}
