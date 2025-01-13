// 불필요한 리렌더링 없는 Validation 을 갖춘 이름 / 설명 / 메일 폼 제출 페이지를 만들어라
// 그 다음 단일 컴포넌트를 재활용 가능토록 + Validation 도 파라미터로 선택가능하도록 만들어라

import { forwardRef, useRef, useState } from 'react'
import '@/App.css'

// @ts-ignore
const FormWithReference = forwardRef(function FormWithReference({ label, required = false }, ref) {
  const [requiredValid, setRequiredValid] = useState(true)

  return (
    <>
      <div>
        {label} :{' '}
        <input
          ref={ref}
          onChange={(e) => {
            required && setRequiredValid(e.currentTarget.value.length !== 0)
          }}
        />
        {requiredValid || <div style={{ color: 'red' }}>{label}은 필수 입력값입니다.</div>}
      </div>
    </>
  )
})

FormWithReference.displayName = 'FormWithReference'

function Practice_10() {
  const reference = {
    name: useRef(),
    description: useRef(),
    email: useRef(),
  }

  function sumbit() {
    console.log({
      // @ts-ignore
      name: reference?.name?.current?.value,
      // @ts-ignore
      description: reference?.description?.current?.value,
      // @ts-ignore
      email: reference?.email?.current?.value,
    })
  }

  return (
    <>
      {/* @ts-ignore */}
      <FormWithReference ref={reference.name} label='이름' required />
      {/* @ts-ignore */}
      <FormWithReference ref={reference.description} label='설명' />
      {/* @ts-ignore */}
      <FormWithReference ref={reference.email} label='메일' required />
      <button onClick={sumbit}>제출</button>
    </>
  )
}

export default Practice_10
