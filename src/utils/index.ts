export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalValue = (items: Array<{ preco: number; amount: number }>): number => {
  return items.reduce((total, item) => total + (item.preco * item.amount), 0)
}
