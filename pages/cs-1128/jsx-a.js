//import React from 'react'
import { Fragment } from 'react'

//另一種寫法
//函式表達式 宣告一個常數(或變數)
//const JsxA = () => <></>

export default function JsxA() {
  return (
    <>
      <h1>JSX中各種值的渲染呈現</h1>
      <h2>數字</h2>
      {123}
      {1 + 2}
      {NaN}

      <h2>字串(String)</h2>
      {'Hellooo'}
      <br />
      {'Hellooo'}
      <br />
      {`total=${100 - 1}`}

      <h2>布林(Boolean)</h2>
      {/* 不呈現 */}
      {true}
      {false}

      <h2>空值(null/undefined)</h2>
      {/* 不呈現 */}
      {null}
      {undefined}

      <h2>陣列</h2>
      {[1, 2, 3]}
      {['a', 'b', 'hello']}

      <h2>物件</h2>
      {/* 不能直接渲染，會造成錯誤，並非ReactNode(React Child) */}
      {/* {{ a: 1, b: 2 }} */}
      
      <h2>函式</h2>
      {/* 不呈現，有警告，並非ReactNode(React Child) */}
      {() => {}}
    </>
  )
}
