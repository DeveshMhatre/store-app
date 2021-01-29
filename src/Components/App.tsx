import React from 'react'

import Header from './Header'
import Products from './Products'

import ProductsContextProvider from '../Contexts/ProductsContext'

const App: React.FC = () => {
  return (
    <ProductsContextProvider>
      <Header />
      <Products />
    </ProductsContextProvider>
  )
}

export default App
