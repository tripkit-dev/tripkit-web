import styled from '@emotion/styled'

import { Size } from '@enums/Card'

import { color } from '@constants/color'
import { css } from '@emotion/react'

const space = '36px'

interface SCardProps {
  imgSrc: string
  size?: Size
}

interface CardProps extends SCardProps {
  top?: React.ReactNode
  bottom?: React.ReactNode
}

export default function Card({
  imgSrc,
  size = Size.MEDIUM,
  top,
  bottom
}: CardProps) {
  return (
    <SCard imgSrc={imgSrc} size={size}>
      <STopArea>{top || '제목'}</STopArea>
      <SBottomArea>
        {bottom || (
          <>
            하단
            <br />
            최하단
          </>
        )}
      </SBottomArea>
    </SCard>
  )
}

export const SCard = styled.li<CardProps>`
  display: inline-block;
  position: relative;
  margin: 0 6px;
  padding: 18px;
  border-radius: 4px;
  background-color: ${color.graySkeleton};

  ${({ imgSrc }) => css`
    background-image: url(${imgSrc});
    background-size: cover;
    background-position: center;
  `}

  ${({ size }) => styles[size!]}

  transition: opacity 0.3s;

  &:first-child {
    margin-left: 28px;
  }

  &:last-child {
    margin-right: 28px;
  }

  &:hover {
    opacity: 0.7;
  }
`

export const STopArea = styled.div`
  margin-top: 9px;
`

export const SBottomArea = styled.div`
  position: absolute;
  bottom: 21px;
  width: calc(100% - ${space});
`

const styles = {
  [Size.SMALL]: css`
    width: calc(130px - ${space});
    height: calc(200px - ${space});
  `,
  [Size.MEDIUM]: css`
    width: calc(160px - ${space});
    height: calc(228px - ${space});
  `,
  [Size.LARGE]: css`
    width: calc(310px - ${space});
    height: calc(200px - ${space});
  `
}
