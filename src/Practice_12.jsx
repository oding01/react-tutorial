import '@/App.css'
import { useRef, useState } from 'react'

function InputComponent({ label, type, reference }) {
  return (
    <>
      <div>
        {label} : <input type={type} ref={reference} />
      </div>
    </>
  )
}

// @ts-ignore
// function IdInput({ label, idRef }) {
//   const [required, setRequired] = useState(false)
//   return (
//     <div>
//       {label} :{' '}
//       <input
//         ref={idRef}
//         onChange={(e) => {
//           setRequired(e.currentTarget.value.length > 0)
//         }}
//       />
//       {required || <div style={{ color: 'red' }}>아이디를 입력해주세요.</div>}
//     </div>
//   )
// }

// @ts-ignore
// function PasswordInput({ label, passwordRef }) {
//   const [valid, setValid] = useState({
//     maxLength: false,
//     minimumLength: false,
//     required: false,
//   })

//   function changeMode(e) {
//     if (e.currentTarget.innerText === '보여주기') {
//       passwordRef.current.type = 'text'
//       e.currentTarget.innerText = '감추기'
//     } else {
//       passwordRef.current.type = 'password'
//       e.currentTarget.innerText = '보여주기'
//     }
//   }
//   return (
//     <>
//       {label} :{' '}
//       <input
//         type='password'
//         ref={passwordRef}
//         onChange={(e) => {
//           setValid({
//             maxLength: e.currentTarget.value.length < 13,
//             minimumLength: e.currentTarget.value.length > 6,
//             required: e.currentTarget.value.length > 0,
//           })
//         }}
//       />
//       <button onClick={changeMode}>보여주기</button>
//       {valid.maxLength || <div style={{ color: 'red' }}>비밀번호는 최대 12자리입니다.</div>}
//       {valid.minimumLength || (
//         <div style={{ color: 'red' }}>비밀번호는 최소 6자리 이상이어야 합니다.</div>
//       )}
//       {valid.required || <div style={{ color: 'red' }}>비밀번호는 필수 입력값입니다.</div>}
//     </>
//   )
// }

function Practice_12() {
  const idRef = useRef(null)
  const passwordRef = useRef(null)

  function register() {
    console.log({
      name: idRef,
      password: passwordRef,
    })
  }
  console.log('- rerendered')

  return (
    <div>
      <section style={{ textAlign: 'left' }}>
        {/* <IdInput label='아이디' idRef={idRef} />
        <PasswordInput label='비밀번호' passwordRef={passwordRef} /> */}
        <InputComponent label={'아이디'} type={'text'} reference={idRef} />
        <InputComponent label={'비밀번호'} type={'password'} reference={passwordRef} />
        <div>
          <button onClick={register}>회원가입</button>
        </div>
      </section>
    </div>
  )
}

export default Practice_12
