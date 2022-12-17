import { ChangeEvent, useState } from 'react'

import { Image } from '@shared/types'

export default function useFileUpload(initialValue: Image[] = []) {
  const [fileList, setFileList] = useState<Image[]>(initialValue)

  const handleFileChange = ({
    target: { files }
  }: ChangeEvent<HTMLInputElement>) => {
    if (!files) {
      return
    }

    const newFiles = Array.from(files).map((file: Image) => {
      file.src = URL.createObjectURL(file)

      return file
    })

    setFileList((prev) => [...prev, ...newFiles])
  }

  const makeFormData = () => {
    if (!fileList) {
      return
    }

    const data = new FormData()
    fileList.forEach((file, i) => {
      data.append(`file-${i}`, file, file.name)
    })

    return data

    // fetch('https://httpbin.org/post', {
    //   method: 'POST',
    //   body: data
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.error(err))
  }

  const resetFiles = () => {
    setFileList([])
  }

  return {
    fileList,
    handleFileChange,
    makeFormData,
    resetFiles
  }
}
