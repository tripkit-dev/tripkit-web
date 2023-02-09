import { useRecoilState } from 'recoil'

import { Popup, popupState } from '@shared/atoms'

export default function usePopup(): [
  Popup,
  { open({ content, options }: Popup): void; close(): void }
] {
  const [popup, setPopup] = useRecoilState(popupState)

  const open = ({ content, options = { isDimmed: true } }: Popup) => {
    setPopup({ content, options })
  }

  const close = () => {
    setPopup({
      content: undefined,
      options: undefined
    })
  }

  return [
    popup,
    {
      open,
      close
    }
  ]
}
