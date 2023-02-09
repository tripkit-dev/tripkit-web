import { atom } from 'recoil'

export const alertState = atom<AlertContainer>({
  key: 'alertState',
  default: {
    queue: [],
    current: undefined
  }
})

type AlertContainer = {
  queue: Alert[]
  current?: Alert
}

export type Alert = {
  id: number
  message: string
  type: AlertType
}

export type AlertType = 'normal' | 'warn' | 'error' | 'success'
