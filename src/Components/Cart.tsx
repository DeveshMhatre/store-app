import React, { useContext } from 'react'

import EmptyCart from './EmptyCart'

import { CartContext } from '../Contexts/CartContext'

const Cart: React.FC = () => {
  const { state, dispatch } = useContext(CartContext)

  if (state.isVisible) {
    document.body.style.overflow = 'hidden'
    if (state.total_items === 0) {
      return <EmptyCart />
    } else {
      return <article className="cart">Cart</article>
    }
  } else {
    document.body.style.overflow = 'unset'
    return <article className="cart--invis"></article>
  }
}

export default Cart
