import React from 'react'

// 子女元件，可以利用函式的傳入參數props取得父母元件傳來的資料
export default function ChildA(props) {
  //console.log(props)
  return (
    <>
      <h3>子女元件(Child) - A</h3>
      <p>來自子女B的資料: {props.dataFromChild}</p>
    </>
  )
}