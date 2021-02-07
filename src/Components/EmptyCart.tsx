import React from 'react'

import { ReactComponent as EmptyCartImg } from '../Assets/illustration.svg'

const EmptyCart: React.FC = () => (
  <article className="empty-cart">
    <h1 className="empty-cart__title">Your cart is empty!</h1>
    <h3 className="empty-cart__subtitle">Please go back and add items</h3>
    <EmptyCartImg className="empty-cart__img" width="100%" height="247.61px" />
  </article>
)

export default EmptyCart
