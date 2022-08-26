import styled from '@emotion/styled'

import NextImage, { ImageProps } from 'next/image'

import { Shape } from '@enums/Shape'

import { color } from '@constants/color'
import { css, Interpolation, Theme } from '@emotion/react'

interface SImageProps {
  shape?: Shape
  hasNewIcon?: boolean
  hasBorder?: boolean
  isFull?: boolean
  containerCSS?: Interpolation<Theme>
}

interface Props extends SImageProps, ImageProps {
  src: string
  notSSR?: boolean
}

export default function Img({
  shape = Shape.ROUND,
  hasNewIcon,
  hasBorder,
  isFull,
  containerCSS,
  src,
  notSSR,
  ...props
}: Props) {
  const sideLength = hasBorder ? '56px' : '58px'

  return (
    <Container
      shape={shape}
      hasNewIcon={hasNewIcon}
      hasBorder={hasBorder}
      isFull={isFull}
      css={containerCSS}
    >
      {notSSR ? (
        <picture>
          <source srcSet={src} type="image/webp" />
          <img
            src={src}
            alt="img"
            width={sideLength}
            height={sideLength}
            {...props}
          />
        </picture>
      ) : (
        <NextImage
          src={src}
          width={sideLength}
          height={sideLength}
          {...props}
        />
      )}
    </Container>
  )
}

const Container = styled.span<SImageProps>`
  display: inline-block;
  width: 56px;
  height: 56px;
  position: relative;

  background-color: ${color.gray02};

  ${({ shape }) => styles[shape!]}
  ${({ hasNewIcon }) => (hasNewIcon ? styles.new : '')}
  ${({ hasBorder }) => (hasBorder ? styles.border : '')}
  ${({ isFull }) => (isFull ? styles.full : '')}
`

const styles = {
  [Shape.NORMAL]: css``,
  [Shape.ROUND]: css`
    border-radius: 50%;

    img {
      border-radius: 50%;
    }
  `,
  new: css`
    &::before {
      content: ' ';
      width: 14px;
      height: 14px;
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 50%;
      background-color: ${color.main};
      z-index: 999;
    }
  `,
  border: css`
    width: 56px;
    height: 56px;
    border: 1px solid ${color.main};
  `,
  full: css`
    width: 100%;
    height: 100%;
  `
}
