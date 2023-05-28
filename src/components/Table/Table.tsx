import Tr from './components/Tr'
import { Rate } from '../types'

interface TableProps {
  values: Rate[]
  buy: boolean
  amount?: number
}

const Table = ({ values, buy, amount }: TableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio x Un.</th>
          <th>Monto obtenido</th>
        </tr>
      </thead>
      <tbody>
        {values.map((rate) => {
          return <Tr key={rate.id} rate={rate} buy={buy} amount={amount} />
        })}
      </tbody>
    </table>
  )
}

export default Table
