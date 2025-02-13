//  Ref 활용하여, 블로그에서 글 읽을때 어떤 제목의 글인지 상단 내비게이션 헤더에 제목 표기

import '@/App.css'
import { useEffect, useRef } from 'react'

function Header({ title }) {
  return (
    <div style={{ position: 'sticky', top: 0, height: 60, backgroundColor: 'white' }}>
      <div id='header-title' style={{ color: 'black', opacity: 0 }}>
        {title}
      </div>
    </div>
  )
}
function Title({ title }) {
  const titleRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.intersectionRatio) {
        document.getElementById('header-title').classList.add('active')
      } else {
        document.getElementById('header-title').classList.remove('active')
      }
    })
    observer.observe(titleRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return <h3 ref={titleRef}>{title}</h3>
}
function Content({ content }) {
  return <div>{content}</div>
}

function Post({ title, content }) {
  return (
    <div>
      <Title title={title} />
      <Content content={content} />
    </div>
  )
}
function Practice_13() {
  const post = {
    title: 'Lorem ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
  }

  return (
    <>
      <Header title={post.title} />
      <Post title={post.title} content={post.content} />
    </>
  )
}

export default Practice_13
