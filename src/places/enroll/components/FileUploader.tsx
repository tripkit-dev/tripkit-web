import styled from '@emotion/styled'

import { useEffect } from 'react'

import { Button } from '@shared/components'
import { useFileUpload } from '@shared/hooks'
import { Image } from '@shared/types'

interface Props {
  images?: Image[]
  onChange?(fileList: Image[]): void
}

export default function FileUploader({ images, onChange }: Props) {
  const { fileList, handleFileChange } = useFileUpload(images)

  useEffect(() => {
    if (fileList.length <= 0) {
      return
    }

    onChange?.(fileList)
  }, [fileList, onChange])

  return (
    <SButton kind="quaternary" size="xsmall" shape="semi-round">
      업로드 하기
      <SUploader
        type="file"
        onChange={handleFileChange}
        multiple
        accept="image/*"
      />
    </SButton>
  )
}

const SButton = styled(Button)`
  width: 120px;
  height: 28px;
  position: relative;
`

const SUploader = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`
