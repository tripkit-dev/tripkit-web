import { useEffect, useState } from 'react'

export default function useScroll() {
  const [root, setRoot] = useState<Element | null>(null)

  const toBottom = () => {
    setTimeout(() => {
      root?.scrollTo({
        top: root.scrollHeight,
        behavior: 'smooth'
      })
    }, 0)
  }

  useEffect(() => {
    setRoot(document.querySelector('#__next'))
  }, [])

  return {
    toBottom
  }
}
