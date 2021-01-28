import React, { useContext } from 'react'

import { ProductsContext } from '../Contexts/ProductsContext'

const Products: React.FC = () => {
  const products = useContext(ProductsContext)

  console.log(products)

  return (
    <>
      <h2>Hello again</h2>
    </>
  )
}

export default Products
