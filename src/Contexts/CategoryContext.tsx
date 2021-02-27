import React, { createContext, useReducer, useMemo } from 'react'

import categoryReducer, {
  stateType,
  actionType,
} from '../Utils/categoryReducer'

export const CategoryContext = createContext<{
  state: stateType
  dispatch: React.Dispatch<actionType>
}>({ state: { categories: [] }, dispatch: () => null })

type Props = {
  children: React.ReactNode
}

const CategoryContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(categoryReducer, { categories: [] })

  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state])

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
