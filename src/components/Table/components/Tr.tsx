import { currencyFormatArs } from 'utils/helpers'
import { Rate } from '../../../components/types'

interface TrProps {
  rate: Rate
  buy: boolean
  amount?: number
}

const Tr = ({ rate, buy, amount }: TrProps) => {
  const priceType = buy ? rate.price.buy : rate.price.sell
  let currentAmount = 0
  if (amount) {
    currentAmount = buy ? rate.price.buy : rate.price.sell
    currentAmount *= amount
  }

  return (
    <tr key={rate.id}>
      <td>{rate.name}</td>
      <td>{currencyFormatArs(priceType)}</td>
      <td>{currencyFormatArs(currentAmount)}</td>
    </tr>
  )
}
export default Tr
