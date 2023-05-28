import { useState, useEffect } from 'react'
import './App.css'
import Table from 'components/Table/Table'
import PriceType from 'components/PriceType/PriceType'
import { Rate } from './components/types'

const MOCK_VALUES = [
  {
    id: 1,
    name: 'Oficial',
    price: {
      buy: 234.82,
      sell: 244.31,
    },
  },
  {
    id: 2,
    name: 'Bolsa',
    price: {
      buy: 459.3,
      sell: 462.89,
    },
  },
  {
    id: 3,
    name: 'Contado con liqui',
    price: {
      buy: 475.3,
      sell: 481.61,
    },
  },
]

const App = () => {
  const [rates, setRates] = useState<Rate[]>([])
  const [priceBuy, setPriceBuy] = useState<boolean>(true)
  const [amount, setAmount] = useState<number>()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = Number(e.target.value)
    if (number > -1) setAmount(number)
  }

  useEffect(() => {
    setTimeout(() => setRates(MOCK_VALUES), 1000)
  }, [])

  return (
    <div className='page'>
      <header>
        <h1>Calculadora de tipos de cambio de Dolar</h1>
      </header>
      <main>
        <div className='leftSide side'>
          <PriceType setBuy={setPriceBuy} />
          <label>Ingrese un monto en Dolares:</label>
          <input type='text' onChange={handleInputChange} value={amount} placeholder='ej: $100' />
        </div>
        <div className='rightSide side'>
          {rates?.length < 1 ? <h1>Obteniendo datos...</h1> : <Table values={rates} buy={priceBuy} amount={amount} />}
        </div>
      </main>
    </div>
  )
}

export default App
