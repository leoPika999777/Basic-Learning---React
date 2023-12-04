import React from 'react'

export default function Child(props) {



    // 子女元件，可以利用函式的傳入參數props取得父母元件傳來的資料
    //props 使屬性質 且一定是物件
    //父母與子女的關係  父母渲染子  子女可以接受到這個值
    //子女接收到後可以用在元件裡面

    console.log(props) 
  return (
    <>
      <h3>Child子女元件</h3>
      <p>Text:{props.text}</p>
      <p>Price:{props.price}</p>
      <p>HasStock:{props.hasStock ? 'true' : 'false'}</p>
      <p>1+2={props.sum(1,2)}</p>
      <p>{props.aa}</p>

      {/*  物件不可以直接渲染  所以不能用 {props.objA} */}
      <p>{JSON.stringify(props.objA)}</p>
    </>
  )
}
