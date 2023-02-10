import Router from 'next/router'
import NProgress from 'nprogress'
import { memo, useCallback, useEffect, useRef } from 'react'

import { color } from '@shared/constants'

const config = Object.freeze({
  color: color.mainPlaceholder,
  height: 2,
  stopDelayMs: 100,
  options: { showSpinner: false }
})

const NextNProgress = () => {
  const timerRef = useRef<NodeJS.Timeout>()

  const routeChangeStart = useCallback(
    (
      _: string,
      {
        shallow
      }: {
        shallow: boolean
      }
    ) => {
      if (!shallow) {
        NProgress.set(0.3)
        NProgress.start()
      }
    },
    []
  )

  const routeChangeEnd = useCallback(
    (
      _: string,
      {
        shallow
      }: {
        shallow: boolean
      }
    ) => {
      if (!shallow) {
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
          NProgress.done(true)
        }, config.stopDelayMs)
      }
    },
    []
  )

  const routeChangeError = useCallback(
    (
      _err: Error,
      _url: string,
      {
        shallow
      }: {
        shallow: boolean
      }
    ) => {
      if (!shallow) {
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
          NProgress.done(true)
        }, config.stopDelayMs)
      }
    },
    []
  )

  useEffect(() => {
    NProgress.configure(config.options)

    Router.events.on('routeChangeStart', routeChangeStart)
    Router.events.on('routeChangeComplete', routeChangeEnd)
    Router.events.on('routeChangeError', routeChangeError)
    return () => {
      Router.events.off('routeChangeStart', routeChangeStart)
      Router.events.off('routeChangeComplete', routeChangeEnd)
      Router.events.off('routeChangeError', routeChangeError)
    }
  }, [routeChangeStart, routeChangeEnd, routeChangeError])

  return (
    <style>{`
  #nprogress {
    pointer-events: none;
  }
  #nprogress .bar {
    background: ${config.color};
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: ${config.height}px;
  }
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${config.color}, 0 0 5px ${config.color};
    opacity: 1;
    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }
  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: solid 2px transparent;
    border-top-color: ${config.color};
    border-left-color: ${config.color};
    border-radius: 50%;
    -webkit-animation: nprogresss-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }
  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }
  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }
  @-webkit-keyframes nprogress-spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes nprogress-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`}</style>
  )
}

export default memo(NextNProgress)
