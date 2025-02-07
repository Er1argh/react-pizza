import { FC, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import { routes } from './routes'

import '../shared/styles/app.scss'

import Loader from '../shared/ui/Loader/Loader'

const App: FC = () => {
  const element = useRoutes(routes)
  return <Suspense fallback={<Loader />}>{element}</Suspense>
}

export default App
