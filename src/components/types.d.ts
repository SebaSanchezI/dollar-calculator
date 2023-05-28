export interface Rate {
  id: number
  name: string
  price: {
    buy: number
    sell: number
  }
}
