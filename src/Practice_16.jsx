// 아래 자율적 상태변이 코드를 10 단위로 + / - 되도록 제약적 상태변이가 되도록 변경하라
import '@/App.css'
import { useReducer } from 'react'

/**
 * Reducer : 상태 변경 로직 모음
 * @param {*} previousState : 이전 상태
 * @param {*} action : 상태 변경 요청 = 상태를 어떻게 변경할지?
 *            - type :
 *                - 증가 : type = INCREASE
 *                - 감소 : type = DECREASE
 * @returns
 */
function reducer(previousState, action) {
  switch (action.type) {
    case 'INCREASE':
      return previousState + action.payload
    case 'DECREASE':
      return previousState - action.payload
    default:
      throw new Error('정의돼 있지 않은 action입니다.')
  }
}

function Practice_16() {
  const [count, dispatch] = useReducer(reducer, 0)
  console.log('rerendered')
  return (
    <>
      <div>{count}</div>
      <button onClick={() => dispatch({ type: 'INCREASE', payload: 5 })}>증가</button>
      <button onClick={() => dispatch({ type: 'DECREASE', payload: 3 })}>감소</button>
    </>
  )
}

export default Practice_16
