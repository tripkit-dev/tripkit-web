import styled from '@emotion/styled'

import { useEffect } from 'react'

import { Button, Img } from '@shared/components'
import { color } from '@shared/constants'
import { useFileUpload } from '@shared/hooks'
import { Image, Image as ImageType } from '@shared/types'

interface Props {
  images?: ImageType[]
  onChange?(fileList: Image[]): void
}

export default function ImagePreviews({ images, onChange }: Props) {
  const { fileList, handleFileChange } = useFileUpload(images)

  useEffect(() => {
    if (fileList.length <= 0) {
      return
    }

    onChange?.(fileList)
  }, [fileList, onChange])

  return (
    <SContainer>
      {images?.map((image) => (
        <SImg key={image.src}>
          <Img
            src={image.src!}
            alt={image.name}
            shape="normal"
            sideLength="100%"
          />
        </SImg>
      ))}
      <SButtonContainer>
        <SButton kind="secondary">
          <SButtonLabel>+</SButtonLabel>
        </SButton>
        <SUploader type="file" onChange={handleFileChange} multiple />
      </SButtonContainer>
    </SContainer>
  )
}

const SContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const SImg = styled.li`
  width: 100px;
  height: 100px;
  margin: 6px;
  border: 1px solid ${color.gray06};
  border-radius: 10px;
  overflow: hidden;
`

const SButtonContainer = styled.span`
  display: inline-block;
  margin: 6px;
  background-color: ${color.white};
  position: relative;
`

const SButton = styled(Button)`
  width: 102px;
  height: 102px;
  border-radius: 10px;
  text-align: center;
  border-color: ${color.gray06};
`

const SButtonLabel = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: ${color.main};
  border-radius: 50%;
  color: ${color.white};
  text-align: center;
  line-height: 16px;
`

const SUploader = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
