export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('pt-BT', {
  style: 'currency',
  currency: 'BRL',
})
