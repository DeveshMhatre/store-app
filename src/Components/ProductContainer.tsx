import React, { useContext } from 'react'

import { CartContext } from '../Contexts/CartContext'

import { Product } from '../Utils/types'

type Props = {
  key: number
  product: Product
}

const ProductContainer: React.FC<Props> = ({ product }: Props) => {
  const { state, dispatch } = useContext(CartContext)

  const item = {
    id: product.id,
    title: product.title,
    price: product.price,
    quantity: 0,
    amount: 0,
  }

  const handleAddClick = () => {
    dispatch({ type: 'ADD', payload: item })
  }

  return (
    <div className="product">
      <img src={product.image} alt={product.title} className="product__image" />
      <p title={product.title} className="product__title">
        {product.title}
      </p>
      <p title={product.description} className="product__desc">
        {product.description}
      </p>

      <span className="product__cart-group">
        <p className="product__cart-group--price">
          &#36; {product.price.toFixed(2)}
        </p>
        <button
          className="product__cart-group--add-to-cart"
          onClick={handleAddClick}
        >
          Add to Cart
        </button>
      </span>
    </div>
  )
}

export default ProductContainer
