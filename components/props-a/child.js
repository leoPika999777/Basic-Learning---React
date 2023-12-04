import React from 'react'
import PropTypes from 'prop-types'

//建議都要寫預設值
//兩種寫法 寫法一 export default function Child(props) {
export default function Child({
  text = 'Nothing',
  price = 999,
  hasStock = fales,
  sum = () => {},
  aa = [],
  objA = {},
}) {
  // 子女元件，可以利用函式的傳入參數props取得父母元件傳來的資料
  //props 使屬性質 且一定是物件
  //父母與子女的關係  父母渲染子  子女可以接受到這個值
  //子女接收到後可以用在元件裡面

  return (
    <>
      <h3>子女元件(Child)</h3>
      <p>text: {text}</p>
      <p>price: {price}</p>
      <p>hasStock: {hasStock ? 'true' : 'false'}</p>
      <p>1+2={sum(1, 2)}</p>
      <p>{aa}</p>
      <p>{JSON.stringify(objA)}</p>
      {/*  物件不可以直接渲染  所以不能用 {props.objA} */}
    </>
  )
}

Child.propTypes = {
  //屬性類型檢查  設定屬性的限制類型  若不符合就會跳警告，但不影響功能
  text: PropTypes.string,  // text屬性的型別為字串
  price: PropTypes.number, // price屬性的型別為數字
}
