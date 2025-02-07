import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { categories } from '../../../shared/constants/categories'
import { selectCategory } from '../model/categories-selectors'
import { setCategoryId } from '../model/categories-slice'

const Categories: FC = () => {
  const dispatch = useDispatch()
  const categoryId = useSelector(selectCategory)

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={category}
            onClick={() => dispatch(setCategoryId(index))}
            className={categoryId === index ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
