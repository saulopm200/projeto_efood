import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import ListaRestaurantes from '../../ListaRestaurantes'

import prato1 from '../../assets/images/imagem.png'
import restaurante2 from '../../assets/images/restaurante 2.png'
import restaurante3 from '../../assets/images/restaurante 3.png'
import restaurante4 from '../../assets/images/restaurante 4.png'
import restaurante5 from '../../assets/images/restaurante 5.png'
import restaurante6 from '../../assets/images/restaurante 6.png'

const restaurants: Restaurant[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    avaliacao: 4.9,
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nihil suscipit nam libero, ipsum sit saepe inventore veritatis quis hic, assumenda molestias reprehenderit officiis natus earum cupiditate perspiciatis excepturi. Mollitia?',
    capa: prato1,
    button: 'Saiba mais',
    destacado: true,
    tipo: 'Japonesa',
    cardapio: {
      foto: prato1,
      preco: 60.90,
      id: 1,
      nome: 'Sushi Especial',
      descricao: 'Sushi com ingredientes frescos',
      porcao: '2 pessoas'
    }
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: 4.6,
    descricao: 'Autêntica culinária italiana com massas frescas e molhos tradicionais. Ambiente aconchegante e ingredientes importados diretamente da Itália.',
    capa: restaurante2,
    button: 'Saiba mais',
    destacado: false,
    tipo: 'Italiana',
    cardapio: {
      foto: restaurante2,
      preco: 45.90,
      id: 2,
      nome: 'Spaghetti Carbonara',
      descricao: 'Massa italiana com molho cremoso',
      porcao: '1 pessoa'
    }
  },
  {
    id: 3,
    titulo: 'A Mineira',
    avaliacao: 4.8,
    descricao: 'Comida caseira mineira com receitas tradicionais. Feijão tropeiro, tutu de feijão e outros pratos típicos preparados com carinho.',
    capa: restaurante3,
    button: 'Saiba mais',
    destacado: false,
    tipo: 'Brasileira',
    cardapio: {
      foto: restaurante3,
      preco: 35.90,
      id: 3,
      nome: 'Feijão Tropeiro',
      descricao: 'Prato típico mineiro',
      porcao: '2 pessoas'
    }
  },
  {
    id: 4,
    titulo: 'Thai Garden',
    avaliacao: 4.7,
    descricao: 'Culinária tailandesa autêntica com temperos exóticos e pratos picantes. Pad Thai, curry verde e outras especialidades do sudeste asiático.',
    capa: restaurante4,
    button: 'Saiba mais',
    destacado: false,
    tipo: 'Tailandesa',
    cardapio: {
      foto: restaurante4,
      preco: 55.90,
      id: 4,
      nome: 'Pad Thai',
      descricao: 'Macarrão tailandês tradicional',
      porcao: '1 pessoa'
    }
  },
  {
    id: 5,
    titulo: 'Burger House',
    avaliacao: 4.5,
    descricao: 'Hambúrgueres artesanais com carne premium e ingredientes frescos. Batatas fritas crocantes e molhos especiais da casa.',
    capa: restaurante5,
    button: 'Saiba mais',
    destacado: false,
    tipo: 'Americana',
    cardapio: {
      foto: restaurante5,
      preco: 28.90,
      id: 5,
      nome: 'Cheeseburger Clássico',
      descricao: 'Hambúrguer com queijo e bacon',
      porcao: '1 pessoa'
    }
  },
  {
    id: 6,
    titulo: 'Sushi Express',
    avaliacao: 4.4,
    descricao: 'Sushi rápido e saboroso para o dia a dia. Combos especiais e pratos individuais com preços acessíveis e qualidade garantida.',
    capa: restaurante6,
    button: 'Saiba mais',
    destacado: false,
    tipo: 'Japonesa',
    cardapio: {
      foto:restaurante6,
      preco: 42.90,
      id: 6,
      nome: 'Combo Sushi',
      descricao: 'Variedade de sushis e sashimis',
      porcao: '1 pessoa'
    }
  }
]

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

const Loader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    fontSize: '18px',
    color: '#E66767'
  }}>
    Carregando restaurantes...
  </div>
)

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simula carregamento de dados
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <ListaRestaurantes comercios={restaurants} />
    </>
  )
}

export default Home
