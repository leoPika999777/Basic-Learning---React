import { useState } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  // 內部資料 P->C 使用
  const [pData, setPData] = useState('parent內部資料')

  // 這組狀態是要讓子女B回傳資料給父母元件 C->P 使用
  //資料想要傳回來 要父母元件提供一個狀態函式  子女可以透過這個函式傳回給父母
  const [dataFromChild, setDataFromChild] = useState('')

  return (
    <>
      <h2>父母元件(Parent)</h2>
      <p>來自子女B的資料: {dataFromChild}</p>
      {/* 父母元件可以用類似HTML屬性給定值的語法，傳遞任何資料給子女元件 */}
      {/* 這裡的pData是一個變數，值可以是任何資料(字串、數字、陣列、物件) */}
      <ChildA pData={pData} />
      {/* 這裡的setDataFromChild是一個函式，用來接收子女元件回傳的資料 */}
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}
