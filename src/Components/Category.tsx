import React, { useState, useContext } from 'react'

import { CategoryContext } from '../Contexts/CategoryContext'

type Props = {
  category: string
}

const Category: React.FC<Props> = ({ category }: Props) => {
  const [selected, setSelected] = useState('category--visible')
  const { state, dispatch } = useContext(CategoryContext)

  const handleClick = () => {
    if (state.categories.includes(category)) {
      dispatch({ type: 'REMOVE', payload: category })
      setSelected('category--invis')
    } else {
      dispatch({ type: 'ADD', payload: category })
      setSelected('category--visible')
    }
  }
  return (
    <button className={`category ${selected}`} onClick={handleClick}>
      {category}
    </button>
  )
}

export default Category
