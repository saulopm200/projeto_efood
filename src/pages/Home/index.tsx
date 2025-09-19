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
    descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
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
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!.',
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
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!.',
    capa: restaurante3,
    button: 'Saiba mais',
    destacado: false,
    tipo: 'Italiana',
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
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!.',
    capa: restaurante4,
    button: 'Saiba mais',
    destacado: false,
    tipo: 'Italiana',
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
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!.',
    capa: restaurante5,
    button: 'Saiba mais',
    destacado: false,
    tipo: 'Italiana',
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
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: 4.4,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!.',
    capa: restaurante6,
    button: 'Saiba mais',
    destacado: false,
    tipo: 'Italiana',
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
