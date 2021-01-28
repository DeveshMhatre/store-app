import React from 'react'

import Products from './Products'

import ProductsContextProvider from '../Contexts/ProductsContext'

const App: React.FC = () => {
  return (
    <ProductsContextProvider>
      <h1>Hello, React!</h1>
      <Products />
    </ProductsContextProvider>
  )
}

export default App
