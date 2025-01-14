import { useRef } from 'react'
import '@/App.css'

function Example() {
  const textReference = useRef(null)

  function handleClick() {
    console.log(textReference)
    textReference.current.focus()
  }

  return (
    <div>
      <input type='text' ref={textReference} />
      <button onClick={handleClick}>click me</button>
    </div>
  )
}
export default Example
