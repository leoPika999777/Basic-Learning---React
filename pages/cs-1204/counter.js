import React, { useState } from 'react'

export default function Counter() {
  const [total, setTotal] = useState(0)

  //特定其況下才用   useState(null)
  //完全不用 useState(undefined)  ＆ useState()

  return (
    <div>
      <h1>{total}</h1>

      <button
        //加入事件監聽  onClick值必須是一個函式
        onClick={() => {
          const newTotal = total + 1
          setTotal(newTotal)
          alert('目前計數器數字是' + newTotal)
        }}
      >
        +1
      </button>

      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </div>
  )
}
