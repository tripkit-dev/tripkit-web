import { useCallback, useMemo } from 'react'
import { useRecoilState } from 'recoil'

import { Popup, popupState } from '@shared/atoms'

export default function usePopup(): [
  Popup,
  { open({ content, options }: Popup): void; close(): void }
] {
  const [popup, setPopup] = useRecoilState(popupState)

  const open = useCallback(
    ({ content, options = { isDimmed: true } }: Popup) => {
      setPopup({ content, options })
    },
    [setPopup]
  )

  const close = useCallback(() => {
    setPopup({
      content: undefined,
      options: undefined
    })
  }, [setPopup])

  const handler = useMemo(
    () => ({
      open,
      close
    }),
    [open, close]
  )

  return [popup, handler]
}
