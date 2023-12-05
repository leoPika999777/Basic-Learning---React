import React from 'react'

// 子女元件，可以利用函式的傳入參數props取得父母元件傳來的資料
//從父母這邊得到的屬性值 是唯讀的  他不能去改變從父母得到的
export default function ChildA(props) {
  //console.log(props)
  return (
    <>
      <h3>子女元件(Child) - A</h3>
      <p>來自子女B的資料: {props.dataFromChild}</p>
    </>
  )
}