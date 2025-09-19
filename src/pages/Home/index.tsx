import { useState } from 'react'

import Header from '../../components/Header'
import ListaRestaurantes from '../../ListaRestaurantes'
import Loader from '../../Loader'
//import { useGetRestaurantsQuery } from '../../services/api'

import ModeloRestaurante from '../../models/Restaurante'
import prato1 from '../../assets/images/imagem.png'
import restaurante2 from '../../assets/images/restaurante2.png'
import restaurante3 from '../../assets/images/restaurante3.png'
import restaurante4 from '../../assets/images/restaurante4.png'
import restaurante5 from '../../assets/images/restaurante5.png'
import restaurante6 from '../../assets/images/restaurante6.png'
import estrela from '../../assets/images/estrela.png'

 const comercios: ModeloRestaurante[] = [
   {
     id: 1,
     infos: ['Destaque da semana', 'Japonesa'],
     image: prato1,
     title: 'Hioki Sushi',
     number: '4.9',
     star: estrela,
     description:
       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nihil suscipit nam libero, ipsum sit saepe inventore veritatis quis hic, assumenda molestias reprehenderit officiis natus earum cupiditate perspiciatis excepturi. Mollitia?',
    // eslint-disable-next-line react/jsx-key

     button: 'Saiba mais'
  },
   {
     id: 2,
     infos: ['Italiana'],
     image: restaurante2,
     title: 'La Dolce Vita Italiana',
     number: '4.6',
     star: estrela,
     description:
       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
     button: 'Saiba mais'
   },
   {
     id: 3,
     infos: ['Italiana'],
     image: restaurante3,
     title: 'La Dolce Vita',
     number: '4.6',
     star: estrela,
     description:
       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
     button: 'Saiba mais'
   },
   {
     id: 4,
     infos: ['Italiana'],
     image: restaurante4,
     title: 'La Dolce Vita',
     number: '4.6',
     star: estrela,
     description:
       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',

     button: 'Saiba mais'
   },
   {
     id: 5,
     infos: ['Italiana'],
     image: restaurante5,
     title: 'La Dolce Vita',
     number: '4.6',
     star: estrela,
     description:
       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',

     button: 'Saiba mais'
   },
   {
     id: 6,
    infos: ['Italiana'],
     image: restaurante6,
     title: 'La Dolce Vita',
     number: '4.6',
     star: estrela,
     description:
       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',

     button: 'Saiba mais'
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

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

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

