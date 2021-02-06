import React, { useContext } from 'react'

import ProductContainer from './ProductContainer'

import { CircularProgress } from '@material-ui/core/'

import { ProductsContext } from '../Contexts/ProductsContext'

const Products: React.FC = () => {
  const products = useContext(ProductsContext)

  if (products.isLoading) {
    return (
      <article className="products--loading">
        <CircularProgress style={{ color: '#08c7bb' }} />
      </article>
    )
  } else {
    return (
      <article className="products">
        <h1 className="products__title">
          Buy from a wide variety of accessories
        </h1>

        <section className="products__listing">
          {products.data.map((product) => (
            <ProductContainer key={product.id} product={product} />
          ))}
        </section>
      </article>
    )
  }
}

export default Products
