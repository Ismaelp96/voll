import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import BasePagina from './pages/paginaBase'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BasePagina />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
