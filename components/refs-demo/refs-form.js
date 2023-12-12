import React, { useRef } from 'react'

export default function RefsForm() {
  //1. 宣告ref給不可以控表單元素使用
  //初始值對應document.getElementById  沒獲得元素會回傳null 所以初始值要用null
  //執行後 inputRef = {current:null}
  const inputRef = useRef(null)

  return (
    <>
      <h2>Refs表單</h2>
      <input type="text" ref={inputRef} />

      {/* 2. 在要使用的表單元件上加上ref  注意ref並非props的一員 */}
      <button
        onClick={() => {
          //3. 使用inputRef.current 可以得到剛定義的表單元件的實體物件(參照)
          inputRef.current.focus()
        }}
      >
        聚焦(focus)
      </button>
      <button onClick={() => {
        inputRef.current.blur()
      }}>失焦(blur)</button>
      <button
        onClick={() => {
          alert(inputRef.current.value)
          console.log(inputRef.current.value)
        }}
      >
        得到值(log)
      </button>
    </>
  )
}
