import React, { useContext, useState } from 'react'

import { CartContext } from '../Contexts/CartContext'

import { Product } from '../Utils/types'
import AddCart from './AddCart'

type Props = {
  key: number
  product: Product
}

const ProductContainer: React.FC<Props> = ({ product }: Props) => {
  const [added, setAdded] = useState(false)

  const { state, dispatch } = useContext(CartContext)

  const item = {
    id: product.id,
    title: product.title,
    price: product.price,
    quantity: 0,
    amount: 0,
  }

  const handleAddClick = () => {
    setAdded(true)
    dispatch({ type: 'ADD', payload: item })
  }

  const handleIncreaseClick = () => {
    dispatch({ type: 'INCREASE', payload: item })
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
        <p className="product__cart-group--price">&#36; {product.price}</p>
        <AddCart
          added={added}
          handleAddClick={handleAddClick}
          handleIncreaseClick={handleIncreaseClick}
        />
      </span>
    </div>
  )
}

export default ProductContainer
