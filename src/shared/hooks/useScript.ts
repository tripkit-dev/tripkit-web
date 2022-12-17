import { useEffect, useState } from 'react'

const scripted: any = {}

export default function useScript(src: string) {
  const [finish, setFinish] = useState<boolean>(false)

  useEffect(() => {
    if (!src || scripted[src]) {
      return
    }

    const script = document.createElement('script')

    script.src = src
    script.async = true
    script.onload = () => {
      setFinish(true)
      scripted[src] = true
    }

    document.body.appendChild(script)
  }, [src])

  return finish
}
