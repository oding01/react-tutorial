// <video> 로 표기되는 비디오를 전환 1 / 전환 2 버튼을 통해 2개의 비디오 교체를 구현해라
import '@/App.css'
import { useRef } from 'react'

function Practice_11_2() {
  const sources = [
    'https://vjs.zencdn.net/v/oceans.mp4',
    'https://lamberta.github.io/html5-animation/examples/ch04/assets/movieclip.mp4',
  ]

  const videoRef = useRef(null)

  console.log('- rerendered')

  return (
    <>
      <video autoPlay controls width={500} ref={videoRef} />
      <div>
        <button onClick={(e) => (videoRef.current.src = sources[0])}>전환 1</button>
        <button onClick={(e) => (videoRef.current.src = sources[1])}>전환 2</button>
      </div>
    </>
  )
}

export default Practice_11_2
