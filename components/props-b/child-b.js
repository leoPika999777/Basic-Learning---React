import React, {useState} from 'react'

// 子女元件，可以利用函式的傳入參數props取得父母元件傳來的資料
export default function ChildB(props) {
  console.log(props)
  const [cData, setCData] = useState('Child B 的內部資料喔')
  return (
    <>
      <h3>子女元件(Child) - B</h3>
      <button
        onClick={() => {
          // 由props得到父母元件傳來的方法，傳入自己本身的內部狀態並呼叫(回送資料給父母)
          props.setDataFromChild(cData)
        }}
      >回送資料給父母</button>
    </>
  )
}
