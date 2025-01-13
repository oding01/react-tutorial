import '@/App.css'
import { useState } from 'react'

function Input({ description, handleConfirm, handleCancel }) {
  const [typed, setTyped] = useState(description)

  const onConfirm = () => {
    const isConfirm = confirm(`${description} 요거 저장 ㄱ?`)
    if (isConfirm) {
      handleConfirm(typed)
    } else {
      onCancel()
    }
  }

  function onCancel() {
    handleCancel()
    setTyped(description)
  }

  return (
    <>
      <input type='text' value={typed} onChange={(e) => setTyped(e.target.value)} />
      <button onClick={onConfirm}>확인</button>
      <button onClick={onCancel}>취소</button>
    </>
  )
}

function ListItem({ index, name, age, desc, onChange }) {
  const [isClick, setClick] = useState(false)

  const confirmEdit = (confirmedInput) => {
    onChange(index, { name, age, desc: confirmedInput })
    setClick(false)
  }

  const cancelEdit = () => {
    setClick(false)
  }

  return (
    <li style={{ textAlign: 'left' }}>
      {name} | {age} |&nbsp;
      {isClick ? (
        <Input description={desc} handleConfirm={confirmEdit} handleCancel={cancelEdit} />
      ) : (
        <span onClick={() => setClick(!isClick)}>{desc}</span>
      )}
    </li>
  )
}

function UnorderedList({ items, onChange }) {
  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} index={index} {...item} onChange={onChange} />
      ))}
    </ul>
  )
}

function App() {
  const [items, setItems] = useState([
    { name: 'Aaron', age: 10, desc: '안녕하세요' },
    { name: 'Baron', age: 30, desc: '반갑습니다' },
    { name: 'Caron', age: 22, desc: '처음뵙겠습니다' },
    { name: 'Daron', age: 17, desc: '보고싶었습니다' },
  ])

  return (
    <>
      <UnorderedList
        items={items}
        onChange={(updatedIndex, updatedItem) => {
          const updatedItems = items.map((item, index) =>
            index === updatedIndex ? updatedItem : item,
          )
          setItems(updatedItems)
        }}
      />
    </>
  )
}

export default App
