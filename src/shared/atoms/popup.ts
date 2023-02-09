import { ReactNode } from 'react'
import { atom } from 'recoil'

export const popupState = atom<Popup>({
  key: 'popupState',
  default: {
    content: undefined,
    options: undefined
  }
})

export type Popup = {
  content: ReactNode
  options?: Options
}

type Options = {
  isDimmed?: boolean
}
