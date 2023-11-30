//http://localhost:3000/cs-1127/counter

import { useState } from 'react'

export default function Counter() {
  // 1-1. 下面是一種宣告  每種宣告的方式不同

  //基本結構用法：const [state, setState] = useState(initialState)
  // [獲得狀態的變數 ,  設定狀態變數的函式] = useState(初始值)
  // total 是 得到狀態的變數
  // setTotal 是設定total的函示
  // 只有setTotal 可以改變total

  
  const [total, setTotal] = useState(0)
  //特定其況下才用   useState(null)
  //完全不用 useState(undefined)  ＆ useState()


  return (
    <div>
      <h1>{total}</h1>

      <button
        className="test"
        onClick={() => {
          setTotal(total + 1)
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
