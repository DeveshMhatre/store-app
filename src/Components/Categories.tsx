import React, { useContext } from 'react'

import { ProductsContext } from '../Contexts/ProductsContext'

import Category from './Category'

const Categories: React.FC = () => {
  const products = useContext(ProductsContext).data

  const categories = [...new Set(products.map((product) => product.category))]

  return (
    <div className="categories">
      <div className="categories__label">Filter by Category</div>
      <div className="categories__chip">
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </div>
    </div>
  )
}

export default Categories
