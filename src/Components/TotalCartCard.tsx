import React, { useContext } from 'react'

import { CartType } from '../Utils/types'

import { CartContext } from '../Contexts/CartContext'

type Props = {
  cartItems: CartType
}

const TotalCartCard: React.FC<Props> = ({ cartItems }: Props) => {
  const { state, dispatch } = useContext(CartContext)

  return (
    <section className="total-card">
      <div className="total-card__items">
        <p>Total items</p>
        <p>{cartItems.total_items}</p>
      </div>
      <div className="total-card__amount">
        <p>Total amount</p>
        <p>{cartItems.total_amount}</p>
      </div>
      <div className="total-card__actions">
        <button className="total-card__actions--checkout" disabled>
          Checkout
        </button>
        <button
          className="total-card__actions--clear"
          onClick={() => dispatch({ type: 'CLEAR' })}
        >
          Clear
        </button>
      </div>
    </section>
  )
}

export default TotalCartCard
