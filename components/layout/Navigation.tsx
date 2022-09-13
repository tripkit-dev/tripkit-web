import styled from '@emotion/styled'

import { useEffect, useMemo, useRef, useState } from 'react'

import { color } from '@constants/color'
import { css } from '@emotion/react'
import { routes } from 'libraries/routes'

import NavItem from './NavItem'

export default function Navigation() {
  const scrollTopRef = useRef<number>(0)
  const [isVisible, setIsVisible] = useState<boolean>(true)

  const list = useMemo(
    () => [
      { icon: '/images/sample/heart.svg', path: routes.main.path, label: '홈' },
      {
        icon: '/images/sample/heart.svg',
        path: routes.mypage.path,
        label: '마이페이지'
      },
      { icon: '/images/sample/heart.svg', path: '/search', label: '탐색' },
      { icon: '/images/sample/heart.svg', path: '/plan', label: '계획하기' }
    ],
    []
  )

  useEffect(() => {
    const detectScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop

      if (st > scrollTopRef.current) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      scrollTopRef.current = st <= 0 ? 0 : st
    }

    document.addEventListener('scroll', detectScroll)

    return () => {
      document.removeEventListener('scroll', detectScroll)
    }
  }, [])

  return (
    <Container visible={isVisible}>
      <SUl>
        {list.map((item, idx) => (
          <NavItem key={item.path} item={item} idx={idx} />
        ))}
      </SUl>
    </Container>
  )
}

interface ContainerProps {
  visible: boolean
}

const Container = styled.footer<ContainerProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 76px;
  background-color: ${color.white};

  z-index: 99;

  transition: transform 0.5s;

  ${({ visible }) =>
    visible
      ? ''
      : css`
          transform: translateY(88px);
        `}
`

const SUl = styled.ul`
  max-width: 500px;
  display: flex;
  align-items: stretch;
  justify-content: space-evenly;
  height: 100%;
  margin: 0 auto;
`
