import React, { useContext } from 'react'

import ProductContainer from './ProductContainer'
import Categories from './Categories'

import { CircularProgress } from '@material-ui/core/'

import { ProductsContext } from '../Contexts/ProductsContext'
import { CategoryContext } from '../Contexts/CategoryContext'

const Products: React.FC = () => {
  const products = useContext(ProductsContext)

  const state = useContext(CategoryContext).state

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

        <Categories />

        <section className="products__listing">
          {products.data.map((product) => {
            if (state.categories.includes(product.category)) {
              return <ProductContainer key={product.id} product={product} />
            }
          })}
        </section>
      </article>
    )
  }
}

export default Products
