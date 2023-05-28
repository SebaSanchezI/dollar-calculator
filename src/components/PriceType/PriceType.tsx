import { useState } from 'react'
import '../../App.css'

interface PriceTypeProps {
  setBuy: (buy: boolean) => void
}

const PRICE_TYPES = {
  BUY: 'buy',
  SELL: 'sell',
}

const PriceType = ({ setBuy }: PriceTypeProps) => {
  const [checked, setChecked] = useState(true)

  const handleClic = (e: React.MouseEvent<HTMLInputElement>): void => {
    const value = (e.target as HTMLInputElement).value
    if (value === PRICE_TYPES.BUY) {
      setBuy(true)
      setChecked(true)
    } else {
      setBuy(false)
      setChecked(false)
    }
  }

  return (
    <fieldset className='values'>
      <legend>Seleccione tipo:</legend>
      <div>
        <input
          onClick={handleClic}
          type='radio'
          id='buy'
          name='priceType'
          defaultValue={PRICE_TYPES.BUY}
          defaultChecked={checked}
        />
        <label htmlFor='buy'>Compra</label>
      </div>
      <div>
        <input
          onClick={handleClic}
          type='radio'
          id='sell'
          name='priceType'
          defaultValue={PRICE_TYPES.SELL}
          defaultChecked={!checked}
        />
        <label htmlFor='sell'>Venta</label>
      </div>
    </fieldset>
  )
}

export default PriceType
