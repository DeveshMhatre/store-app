import React from 'react'

import { CartItemType } from '../Utils/types'
import { actionType } from '../Utils/cartReducer'

type Props = {
  key: number
  product: CartItemType
  dispatch: React.Dispatch<actionType>
}

const CartProductCard: React.FC<Props> = ({ product, dispatch }: Props) => {
  const handleIncreaseClick = () => {
    dispatch({ type: 'INCREASE', payload: product })
  }

  const handleDecreaseClick = () => {
    product.quantity > 1
      ? dispatch({ type: 'DECREASE', payload: product })
      : dispatch({ type: 'REMOVE', payload: product })
  }

  return (
    <div className="cart-product">
      <div className="cart-product__name">{product.title}</div>
      <div className="cart-product__actions">
        <p className="cart-product__actions--amount">
          &#36; {product.amount.toFixed(2)}
        </p>
        <div className="cart-product__actions--shop">
          <button
            title="Add more items"
            className="product__inc"
            onClick={handleIncreaseClick}
          >
            +
          </button>
          <p className="product__quantity">{product.quantity}</p>
          <button
            title="Remove items"
            className="product__dec"
            onClick={handleDecreaseClick}
          >
            -
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartProductCard
