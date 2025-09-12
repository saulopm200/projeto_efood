import { useParams } from 'react-router-dom'

//import { useGetRestaurantQuery } from '../../services/api'

// import ProfileHeader from '../../components/ProfileHeader'
import Banner from '../../components/Banner'
import ListaPratos from '../../ListaPratos'

const Loader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    fontSize: '18px',
    color: '#E66767'
  }}>
    Carregando restaurante...
  </div>
)

export type Prato = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export interface Restaurante {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

type PratoParams = {
  id: string
}

const Categories = () => {
  const { id } = useParams() as PratoParams

  // Dados mockados temporários para demonstração
  const mockRestaurant: Restaurante = {
    id: parseInt(id || '1'),
    titulo: 'Hioki Sushi',
    destacado: true,
    tipo: 'Japonesa',
    avaliacao: 4.9,
    descricao: 'Restaurante especializado em sushi',
    capa: '/src/assets/images/banner (1).png',
    cardapio: [
      {
        id: 1,
        foto: '/src/assets/images/imagem.png',
        preco: 60.90,
        nome: 'Sushi Especial',
        descricao: 'Sushi com ingredientes frescos e selecionados',
        porcao: '2 pessoas'
      },
      {
        id: 2,
        foto: '/src/assets/images/imagem.png',
        preco: 45.90,
        nome: 'Sashimi Premium',
        descricao: 'Peixe fresco cortado em fatias finas',
        porcao: '1 pessoa'
      }
    ]
  }

  return (
    <>
      {/* <ProfileHeader /> */}
      <Banner />
      <ListaPratos pratos={mockRestaurant.cardapio} />
    </>
  )
}

export default Categories
