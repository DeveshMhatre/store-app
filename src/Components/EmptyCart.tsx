import React from 'react'

import EmptyCartImg from '../Assets/illustration.svg'

const EmptyCart: React.FC = () => (
  <article className="empty-cart">
    <div className="text-container">
      <h1 className="empty-cart__title">Your cart is empty!</h1>
      <h3 className="empty-cart__subtitle">Please go back and add items</h3>
    </div>
    <img src={EmptyCartImg} className="empty-cart__img" />
  </article>
)

export default EmptyCart
