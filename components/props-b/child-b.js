import React, { useState, useEffect } from 'react'

// 子女元件，可以利用函式的傳入參數props取得父母元件傳來的資料
export default function ChildB(props) {
  console.log(props)
  const [cData, setCData] = useState('Child B 的內部資料喔')

  //useEffect處理副作用 寫法是直接呼叫
  //這裡使用是希望子女元件不用靠事件觸發 也可以回送
  //useEffect(   第一個是函式()=>{} ,  第二個是 陣列[]  )
  useEffect(() => {
    props.setDataFromChild(cData)
  }, [])

  return (
    <>
      <h3>子女元件(Child) - B</h3>
      <button
        onClick={() => {
          // 由props得到父母元件傳來的方法，傳入自己本身的內部狀態並呼叫(回送資料給父母)
          props.setDataFromChild(cData)
        }}
      >
        回送資料給父母
      </button>
    </>
  )
}
