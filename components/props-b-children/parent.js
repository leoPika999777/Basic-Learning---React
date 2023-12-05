import { useState } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  // 內部資料 P->C 使用
  //const [pData, setPData] = useState('parent內部資料')

  // 這組狀態是要讓子女B回傳資料給父母元件 C->P 使用
  const [dataFromChild, setDataFromChild] = useState('')

  return (
    <>
      <h2>父母元件(Parent)</h2>
      {/* 父母元件可以用類似HTML屬性給定值的語法，傳遞任何資料給子女元件 */}
      <ChildA dataFromChild={dataFromChild} />
      {/* 這裡的setDataFromChild是一個函式，用來接收子女元件回傳的資料 */}
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}