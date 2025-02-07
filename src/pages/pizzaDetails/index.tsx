import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

import styles from './PizzaDetails.module.scss'

const PizzaDetails: FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [pizza, setPizza] = useState<{
    imageUrl: string
    title: string
    price: number
  }>()

  const fetchPizza = async () => {
    try {
      const { data } = await axios.get(`https://67835ed48b6c7a1316f4316c.mockapi.io/items/${id}`)
      setPizza(data)
    } catch (error) {
      console.log(error)
      alert('Ошибка при получении пиццы!')
      navigate('/')
    }
  }

  useEffect(() => {
    fetchPizza()
  }, [])

  if (!pizza) {
    return <h2>Загрузка...</h2>
  }

  return (
    <div className="container">
      <img className={styles.pizza} src={pizza.imageUrl} alt="Pizza" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  )
}

export default PizzaDetails
