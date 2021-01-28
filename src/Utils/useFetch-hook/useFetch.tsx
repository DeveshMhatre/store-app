import { useEffect, useReducer } from 'react'

import reducer from './reducer'

import { FetchInitialValue } from '../types'

export const initialValue: FetchInitialValue = {
  isLoading: true,
  data: [],
  error: '',
}

const useFetch = (url: string): FetchInitialValue => {
  const [state, dispatch] = useReducer(reducer, initialValue)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()

        dispatch({ type: 'SUCCESS', payload: data })
      } catch (error) {
        dispatch({ type: 'ERROR', payload: error })
      }
    }

    getData()
  }, [])

  return state
}

export default useFetch
