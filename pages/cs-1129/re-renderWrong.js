import React from 'react'
import { useState } from 'react'

export default function ReRender() {
  const [total, setTotal] = useState({a:0})
  console.log('render')
  return (
    <>
      <h1>re-render範例</h1>
      <h1>{total.a}</h1>

      <button
        className="test"
        onClick={() => {
          total.a= total.a+1
          console.log(total)
          //setTotal(total + 1)
        }}
      >
        +1
      </button>
    </>
    //右鍵 檢查＝> 三個點 ＝>  More Tools => Rendering => Paint flashing 打勾
  )
}
