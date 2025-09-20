import Header from '../../components/Header'
import ListaRestaurantes from '../../ListaRestaurantes'
import Loader from '../../Loader'
import { getRestaurants } from '../../services/restaurantService'

export type Restaurant = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  capa: string
  button: string
  destacado: boolean
  tipo: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const restaurants = getRestaurants()

  if (restaurants) {
    return (
      <>
        <Header />
        <ListaRestaurantes comercios={restaurants} />
      </>
    )
  }

  return <Loader />
}

export default Home

