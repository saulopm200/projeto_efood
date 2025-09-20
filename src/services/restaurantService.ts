import prato1 from '../assets/images/imagem.png'
import restaurante2 from '../assets/images/restaurante 2.png'
import restaurante3 from '../assets/images/restaurante 3.png'
import restaurante4 from '../assets/images/restaurante 4.png'
import restaurante5 from '../assets/images/restaurante 5.png'
import restaurante6 from '../assets/images/restaurante 6.png'

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
  }[]
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    avaliacao: 4.9,
    descricao: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    capa: prato1,
    button: 'Saiba mais',
    destacado: true,
    tipo: 'Japonesa',
    cardapio: [
      {
        foto: prato1,
        preco: 60.90,
        id: 1,
        nome: 'Sushi Especial',
        descricao: 'Sushi com ingredientes frescos',
        porcao: '2 pessoas'
      },
      {
        foto: prato1,
        preco: 45.90,
        id: 2,
        nome: 'Sashimi Premium',
        descricao: 'Peixe fresco cortado em fatias finas',
        porcao: '1 pessoa'
      },
      {
        foto: prato1,
        preco: 35.90,
        id: 3,
        nome: 'Temaki',
        descricao: 'Cone de alga com arroz e peixe',
        porcao: '1 pessoa'
      }
    ]
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    avaliacao: 4.6,
    descricao: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    capa: restaurante2,
    button: 'Saiba mais',
    destacado: false,
    tipo: 'Italiana',
    cardapio: [
      {
        foto: restaurante2,
        preco: 45.90,
        id: 4,
        nome: 'Spaghetti Carbonara',
        descricao: 'Massa italiana com molho cremoso',
        porcao: '1 pessoa'
      },
      {
        foto: restaurante2,
        preco: 52.90,
        id: 5,
        nome: 'Pizza Margherita',
        descricao: 'Pizza tradicional com tomate e mussarela',
        porcao: '2 pessoas'
      },
      {
        foto: restaurante2,
        preco: 38.90,
        id: 6,
        nome: 'Risotto de Funghi',
        descricao: 'Arroz cremoso com cogumelos',
        porcao: '1 pessoa'
      }
    ]
  },
  {
    id: 3,
    titulo: 'Casa Mineira',
    avaliacao: 4.7,
    descricao: 'Sabores autênticos da culinária mineira! Feijão tropeiro, tutu de feijão, frango com quiabo e muito mais. Pratos generosos e saborosos que vão te transportar para as montanhas de Minas Gerais.',
    capa: restaurante3,
    button: 'Saiba mais',
    destacado: false,
    tipo: 'Mineira',
    cardapio: [
      {
        foto: restaurante3,
        preco: 35.90,
        id: 7,
        nome: 'Feijão Tropeiro',
        descricao: 'Prato típico mineiro com feijão e linguiça',
        porcao: '2 pessoas'
      },
      {
        foto: restaurante3,
        preco: 42.90,
        id: 8,
        nome: 'Frango com Quiabo',
        descricao: 'Frango ensopado com quiabo fresco',
        porcao: '2 pessoas'
      },
      {
        foto: restaurante3,
        preco: 28.90,
        id: 9,
        nome: 'Tutu de Feijão',
        descricao: 'Feijão cozido e amassado com farinha',
        porcao: '1 pessoa'
      }
    ]
  },
  {
    id: 4,
    titulo: 'Thai Express',
    avaliacao: 4.5,
    descricao: 'Culinária tailandesa autêntica com temperos exóticos e sabores únicos. Pad Thai, curry verde, tom yum e muito mais. Uma explosão de sabores que vai te conquistar!',
    capa: restaurante4,
    button: 'Saiba mais',
    destacado: false,
    tipo: 'Tailandesa',
    cardapio: [
      {
        foto: restaurante4,
        preco: 55.90,
        id: 10,
        nome: 'Pad Thai',
        descricao: 'Macarrão tailandês tradicional',
        porcao: '1 pessoa'
      },
      {
        foto: restaurante4,
        preco: 48.90,
        id: 11,
        nome: 'Curry Verde',
        descricao: 'Curry com leite de coco e vegetais',
        porcao: '1 pessoa'
      },
      {
        foto: restaurante4,
        preco: 32.90,
        id: 12,
        nome: 'Tom Yum',
        descricao: 'Sopa picante com camarão e limão',
        porcao: '1 pessoa'
      }
    ]
  },
  {
    id: 5,
    titulo: 'Burger House',
    avaliacao: 4.4,
    descricao: 'Hambúrgueres artesanais com ingredientes frescos e de qualidade. Carnes suculentas, pães macios e combinações únicas. O melhor da culinária americana no seu delivery!',
    capa: restaurante5,
    button: 'Saiba mais',
    destacado: false,
    tipo: 'Americana',
    cardapio: [
      {
        foto: restaurante5,
        preco: 28.90,
        id: 13,
        nome: 'Cheeseburger Clássico',
        descricao: 'Hambúrguer com queijo e bacon',
        porcao: '1 pessoa'
      },
      {
        foto: restaurante5,
        preco: 35.90,
        id: 14,
        nome: 'BBQ Bacon Burger',
        descricao: 'Hambúrguer com molho BBQ e bacon crocante',
        porcao: '1 pessoa'
      },
      {
        foto: restaurante5,
        preco: 42.90,
        id: 15,
        nome: 'Chicken Deluxe',
        descricao: 'Hambúrguer de frango com salada e molho especial',
        porcao: '1 pessoa'
      }
    ]
  },
  {
    id: 6,
    titulo: 'Sushi Master',
    avaliacao: 4.8,
    descricao: 'Sushi de alta qualidade com peixes frescos e técnicas tradicionais. Combos especiais, sashimis premium e rolls criativos. A melhor experiência japonesa em casa!',
    capa: restaurante6,
    button: 'Saiba mais',
    destacado: false,
    tipo: 'Japonesa',
    cardapio: [
      {
        foto: restaurante6,
        preco: 42.90,
        id: 16,
        nome: 'Combo Sushi',
        descricao: 'Variedade de sushis e sashimis',
        porcao: '1 pessoa'
      },
      {
        foto: restaurante6,
        preco: 65.90,
        id: 17,
        nome: 'Combo Premium',
        descricao: 'Sushi, sashimi e temaki variados',
        porcao: '2 pessoas'
      },
      {
        foto: restaurante6,
        preco: 38.90,
        id: 18,
        nome: 'California Roll',
        descricao: 'Roll com caranguejo, abacate e pepino',
        porcao: '1 pessoa'
      }
    ]
  }
]

export const getRestaurants = (): Restaurant[] => {
  return restaurants
}

export const getRestaurantById = (id: number): Restaurant | undefined => {
  return restaurants.find(restaurant => restaurant.id === id)
}

export const getRestaurantsByType = (tipo: string): Restaurant[] => {
  return restaurants.filter(restaurant => restaurant.tipo === tipo)
}


