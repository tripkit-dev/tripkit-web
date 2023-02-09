import { useCallback } from 'react'
import { useSetRecoilState } from 'recoil'

import { alertState, AlertType } from '@shared/atoms'

export default function useAlert() {
  const setAlert = useSetRecoilState(alertState)

  const alert = useCallback(
    (message: string, type: AlertType) => {
      const id = Math.random()

      setAlert((prev) => ({
        ...prev,
        queue: [...prev.queue, { id, message, type }]
      }))
    },
    [setAlert]
  )

  return {
    normal: (message: string) => alert(message, 'normal'),
    success: (message: string) => alert(message, 'success'),
    warn: (message: string) => alert(message, 'warn'),
    error: (message: string) => alert(message, 'error')
  }
}
