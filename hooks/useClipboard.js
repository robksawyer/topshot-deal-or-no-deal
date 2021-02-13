/**
 * useClipboard
 * @param {*} text
 */
import React, { useEffect, useState, useCallback } from 'react'

export const useClipboard = (text) => {
  const copyToClipboard = (str) => {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '')
    el.style.position = 'absolute'
    el.style.left = '-9999px'
    document.body.appendChild(el)
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false
    el.select()
    const success = document.execCommand('copy')
    document.body.removeChild(el)
    if (selected) {
      document.getSelection().removeAllRanges()
      document.getSelection().addRange(selected)
    }
    return success
  }

  const [copied, setCopied] = useState(false)

  const copy = useCallback(() => {
    if (!copied) setCopied(copyToClipboard(text))
  }, [text])
  useEffect(() => () => setCopied(false), [text])

  return [copied, copy]
}

// EXAMPLES
// const TextCopy = (props) => {
//   const [copied, copy] = useCopyToClipboard('Lorem ipsum')
//   return (
//     <div>
//       <button onClick={copy}>Click to copy</button>
//       <span>{copied && 'Copied!'}</span>
//     </div>
//   )
// }
