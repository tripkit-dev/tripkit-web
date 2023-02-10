import Router from 'next/router'
import nProgress from 'nprogress'
import { useEffect } from 'react'
import { useBeforeUnload } from 'react-use'

export default function useLeavePageConfirm(
  isConfirm = true,
  message = '정말 페이지를 떠나시겠어요? \n변경사항은 저장되지 않아요'
) {
  useBeforeUnload(isConfirm, message)

  useEffect(() => {
    const handler = () => {
      if (isConfirm && !window.confirm(message)) {
        nProgress.done()
        throw 'Route Canceled'
      }
    }

    Router.events.on('beforeHistoryChange', handler)

    return () => {
      Router.events.off('beforeHistoryChange', handler)
    }
  }, [isConfirm, message])
}
