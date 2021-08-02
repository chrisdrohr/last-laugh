import React, { useEffect } from 'react'
export const useOnLoad = () => {
  const [loaded, setLoaded] = React.useState(false)

  useEffect(
    () =>
      window.addEventListener('load', () => setLoaded(true), { once: true }),
    []
  )

  return loaded
}

export const useOnScroll = () => {
  const [pos, setPos] = React.useState(window.scrollY)

  useEffect(
    () =>
      window.addEventListener('scroll', () => {
        setPos(window.scrollY)
      }),
    []
  )

  return pos
}
