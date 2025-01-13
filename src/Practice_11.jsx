// - 아래의 코드에서 `apple` 영역을 `button` 을 통해 `- rerendered` 로그없이 색을 바꾸어보자
// - **제약** : `button` 을 눌렀을때 `- rerendered` 로그가 절대 찍히면 안된다.
import '@/App.css'
import { useRef } from 'react'

function Practice_11() {
  const reference = useRef(null)
  console.log('- rerendered')

  return (
    <>
      <div ref={reference} style={{ color: 'black' }}>
        apple
      </div>
      <button
        onClick={(e) => {
          reference.current.style.color === 'black'
            ? (reference.current.style.color = 'red')
            : (reference.current.style.color = 'black')
        }}
      >
        변경
      </button>
    </>
  )
}

export default Practice_11
