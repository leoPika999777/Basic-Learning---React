import React from 'react'
import { useState } from 'react'

export default function ReRender() {
  const [total, setTotal] = useState(0)
  console.log('render')
  return (
    <>
      <h1>re-render範例</h1>
      <h1>{total}</h1>

      <button
        className="test"
        onClick={() => {
          setTotal(total + 1)
          //每變一次 都是新的total取代
        }}
      >
        +1
      </button>
      <button
        className="test"
        onClick={() => {
          setTotal(total -1)
        }}
      >
        -1
      </button>
    </>
    //右鍵 檢查＝> 三個點 ＝>  More Tools => Rendering => Paint flashing 打勾
  )
}
