import { Routes, Route } from 'react-router-dom'

import Home from './pages/Categories/Home'
import Categories from './pages/Categories/Home'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/cardapio/:id" element={<Categories />} />
  </Routes>
)

export default Rotas
