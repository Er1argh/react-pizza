import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

import MainLayout from '../widgets/layout/MainLayout'

const Home = lazy(() => import('../pages/home'))
const Cart = lazy(() => import('../pages/cart'))
const PizzaDetails = lazy(() => import('../pages/pizzaDetails'))
const NotFound = lazy(() => import('../pages/notFound'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'cart', element: <Cart /> },
      { path: 'pizzas/:id', element: <PizzaDetails /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
