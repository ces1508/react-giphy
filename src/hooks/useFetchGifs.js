import { useState, useEffect } from 'react'
import getGifs from '../helpers/getGifs'

const initialState = {
  data: [],
  loading: true,
  error: false
}

export const useFetchGifs = (category) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    const makeRequest = async () => {
      getGifs(category)
      .then(data => {
        setState(state => ({
          ...state,
          data: [...data, ...state.data],
          error: false
        }))
      })
      .catch(e => {
        setState(state => ({
          ...state,
          error: true
        }))
      })
      .finally(() => {
        setState(state => ({
          ...state,
          loading: false
        }))
      })
    }
    makeRequest()
  }, [category])

  return state
}