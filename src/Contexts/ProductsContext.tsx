import React, { createContext, useMemo } from 'react'

import useFetch, { initialValue } from '../Utils/useFetch-hook/useFetch'

import { FetchInitialValue } from '../Utils/types'

type Props = {
  children: React.ReactNode
}

export const ProductsContext = createContext<FetchInitialValue>(initialValue)

const ProductsContextProvider: React.FC<Props> = ({ children }: Props) => {
  const products = useFetch('https://fakestoreapi.com/products/')

  const contextValue = useMemo(() => {
    return products
  }, [products])

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
