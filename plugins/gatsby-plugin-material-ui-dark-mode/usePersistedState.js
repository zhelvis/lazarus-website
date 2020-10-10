import { useState, useEffect } from 'react'

export default (key, defaultValue) => {
  const [state, setState] = useState(
    () =>
      JSON.parse(
        // need for resolve gatsby ssr
        typeof localStorage !== 'undefined' && localStorage.getItem(key)
      ) || defaultValue
  )
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])
  return [state, setState]
}
