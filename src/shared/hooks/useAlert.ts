import { useSetRecoilState } from 'recoil'

import { alertState, AlertType } from '@shared/atoms'

export default function useAlert() {
  const setAlert = useSetRecoilState(alertState)

  return (message: string, type: AlertType = 'normal') => {
    const id = Math.random()

    setAlert((prev) => ({
      ...prev,
      queue: [...prev.queue, { id, message, type }]
    }))
  }
}
