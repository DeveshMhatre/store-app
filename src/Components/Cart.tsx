import React, { useContext } from 'react'

import EmptyCart from './EmptyCart'
import TotalCartCard from './TotalCartCard'

import { CartContext } from '../Contexts/CartContext'

const Cart: React.FC = () => {
  const { state, dispatch } = useContext(CartContext)

  if (state.isVisible) {
    // Hide scrollbars when Cart is visible
    document.body.style.overflow = 'hidden'
    if (state.total_items === 0) {
      return <EmptyCart />
    } else {
      return (
        <article className="cart">
          <TotalCartCard cartItems={state} />
        </article>
      )
    }
  } else {
    // Show scrollbars when Cart is invisible
    document.body.style.overflow = 'unset'
    return <article className="cart--invis"></article>
  }
}

export default Cart
