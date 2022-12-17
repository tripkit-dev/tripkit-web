export default function useCopy2Clipboard() {
  function copy(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied the text: ' + text)
    })
  }

  return copy
}
