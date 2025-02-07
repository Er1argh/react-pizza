import { FC } from 'react'
import { useDispatch } from 'react-redux'
import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'

import { setCurrentPage } from '../model/pagination-slice'

const Pagination: FC = () => {
  const dispatch = useDispatch()

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={event => dispatch(setCurrentPage(event.selected + 1))}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
