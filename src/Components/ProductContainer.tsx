import React, { useState } from 'react'

import { Product } from '../Utils/types'
import AddCart from './AddCart'

type Props = {
  key: number
  product: Product
}
const ProductContainer: React.FC<Props> = ({ product }: Props) => {
  const [added, setAdded] = useState(false)

  return (
    <div className="product">
      <img src={product.image} alt={product.title} className="product__image" />
      <p className="product__title">{product.title}</p>
      <p className="product__desc">{product.description}</p>

      <span className="product__cart-group">
        <p className="product__cart-group--price">&#36; {product.price}</p>
        <AddCart added={added} handleClick={() => setAdded(true)} />
      </span>
    </div>
  )
}

export default ProductContainer
