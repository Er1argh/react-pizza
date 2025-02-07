import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '../../app/store'

import { selectPizzas } from '../../entities/pizza/model/pizza-selectors'
import { selectSort } from '../../features/sort/model/sort-selectors'
import { selectCategory } from '../../features/categories/model/categories-selectors'
import { selectSearchValue } from '../../features/search/model/search-selectors'
import { selectPagination } from '../../features/pagination/model/pagination-selectors'

import { fetchPizza } from '../../entities/pizza/model/pizza-thunks'

import Categories from '../../features/categories/ui/Categories'
import Sort from '../../features/sort/ui/Sort'
import PizzaBlock from '../../entities/pizza/ui/PizzaBlock'
import Skeleton from '../../entities/pizza/ui/Skeleton'
import Pagination from '../../features/pagination/ui/Pagination'

type Item = {
  id: string
  title: string
  price: number
  imageUrl: string
  sizes: number[]
  types: number[]
}

const Home: FC = () => {
  // const navigate = useNavigate()
  const dispatch = useAppDispatch()
  // const isSearch = useRef(false)
  // const isMounted = useRef(false)
  const searchValue = useSelector(selectSearchValue)
  const categoryId = useSelector(selectCategory)
  const sort = useSelector(selectSort)
  const currentPage = useSelector(selectPagination)

  // const { searchValue, categoryId, sort, currentPage } = useSelector(selectFilter)
  const { items, status } = useSelector(selectPizzas)
  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />)
  const pizzas = items.map((item: Item) => <PizzaBlock key={item.id} {...item} />)

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace('-', '')
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    dispatch(fetchPizza({ currentPage, categoryId, sortBy, order, searchValue }))
  }

  // A temporary solution
  useEffect(() => {
    getPizzas()
  }, [categoryId, sort.sortProperty, searchValue, currentPage])

  // useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       sortProperty: sort.sortProperty,
  //       categoryId,
  //       currentPage,
  //     })

  //     navigate(`?${queryString}`)
  //   }

  //   isMounted.current = true
  // }, [categoryId, sort.sortProperty, currentPage])

  // useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as FetchPizzasArgs
  //     const sort = sortList.find(sortItem => sortItem.sortProperty === params.sortBy)
  //     dispatch(
  //       setFilters({
  //         searchValue: params.searchValue,
  //         categoryId: params.categoryId,
  //         currentPage: params.currentPage,
  //         sort: sort || sortList[0],
  //       }),
  //     )
  //     isSearch.current = true
  //   }
  // }, [])

  // useEffect(() => {
  //   if (!isSearch.current) {
  //     getPizzas()
  //   }

  //   isSearch.current = false
  //   window.scrollTo(0, 0)
  // }, [categoryId, sort.sortProperty, searchValue, currentPage])

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>
          <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}

      <Pagination />
    </div>
  )
}

export default Home
