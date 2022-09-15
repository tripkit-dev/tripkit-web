import styled from '@emotion/styled'

import { css, Interpolation, Theme } from '@emotion/react'

import { useState } from 'react'

import NextImage, { ImageProps } from 'next/image'

import { Shape } from '@enums/Shape'

import { color } from '@constants/color'

interface SImageProps {
  shape?: Shape
  hasNewIcon?: boolean
  isIconLeft?: boolean
  hasBorder?: boolean
  sideLength?: string
}

interface Props extends SImageProps, ImageProps {
  src: string
  notSSR?: boolean
  containerCss?: Interpolation<Theme>
}

const Img = ({
  shape = Shape.ROUND,
  hasNewIcon,
  isIconLeft,
  hasBorder,
  sideLength,
  notSSR,
  containerCss,
  src,
  ...props
}: Props) => {
  const [isError, setIsError] = useState<boolean>(false)
  const _sideLength = sideLength || (hasBorder ? '56px' : '58px')

  const imgAdditionalProps =
    props.layout === 'fill'
      ? props
      : { width: _sideLength, height: _sideLength, ...props }

  return (
    <Container
      shape={shape}
      hasNewIcon={hasNewIcon}
      isIconLeft={isIconLeft}
      hasBorder={hasBorder}
      sideLength={sideLength}
      isError={isError}
      css={containerCss}
    >
      {notSSR ? (
        <picture>
          <source srcSet={src} type="image/webp" />
          <img src={src} alt={src} width={_sideLength} height={_sideLength} />
        </picture>
      ) : (
        <NextImage
          src={src}
          alt={src}
          onError={() => {
            setIsError(true)
          }}
          {...imgAdditionalProps}
          {...props}
        />
      )}
    </Container>
  )
}

export default Img

const Container = styled.span<SImageProps & { isError: boolean }>`
  display: inline-block;
  width: 58px;
  height: 58px;
  position: relative;

  ${({ shape }) => styles[shape!]}
  ${({ hasNewIcon }) => (hasNewIcon ? styles.new : '')}
  ${({ isIconLeft }) => (isIconLeft ? styles.leftIcon : '')}
  ${({ hasBorder }) => (hasBorder ? styles.border : '')}
  ${({ isError }) => (isError ? styles.placeholder : '')}
  ${({ sideLength }) => (sideLength ? styles.sideLength(sideLength) : '')}
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
      z-index: 9;
    }
  `,
  leftIcon: css`
    &::before {
      top: 2px;
      left: 2px;
    }
  `,
  border: css`
    width: 56px;
    height: 56px;
    border: 1px solid ${color.main};
  `,
  placeholder: css`
    background-color: ${color.gray02};
  `,
  sideLength: (length: string) => css`
    width: ${length};
    height: ${length};
  `
}
