import { ChangeEvent, useState } from 'react'

export default function useFileUpload() {
  const [fileList, setFileList] = useState<File[]>([])

  const handleFileChange = ({
    target: { files }
  }: ChangeEvent<HTMLInputElement>) => {
    if (!files) {
      return
    }

    const newFiles = Array.from(files)

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
