import React, { useEffect } from 'react'

export default function Child(props) {
  //2.觀察props
  console.log(props)

  //3.在子女這邊寫一個useEffect
  //第一次render之後(After)會執行一次 + 放入相依陣列的變數有更動後(After)，會執行一次(didMount+didUpdate)
  useEffect(()=>{
    console.log('didMount+didUpdate')
  },[props])
  //3-1. 屬性其實是物件資料類型，所以依照 參照相等性 理論上，{name: 'Iris'}!=={name: 'Iris'}

  //1.先觀察render情況
  console.log('render')
  return (
    <>
      <h2>子女元件(Child)</h2>
    </>
  )
}
