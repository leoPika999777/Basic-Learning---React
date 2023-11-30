import React from 'react'

export default function CRender() {
  //邏輯與

  //1. &&前面不可以放數字0
  //const count = 0
  //return <>{count && <h1>Message: {count}</h1>}</>
  //   相當於 return <>{0 && <h1>Message: {count}</h1>}
  // 0是假的 所以回傳 0

  //2. 用三元運算
  const count = 1
  //return <>{count>0 && <h1>Message: {count}</h1>}</>
  return (
    <>
      <h1>條件渲染</h1>
      {/* &&是if的內聯式語法 */}
      <p>{count && <h1>Messages: {count}</h1>}</p>
      {/* 建議使用強制轉為布林值，或用比較運算(不等於、大於小於)在前面的條件式運算出真正布林值 */}
      <p>{!!count && <h1>Messages: {count}</h1>}</p>
      <p>{count > 0 && <h1>Messages: {count}</h1>}</p>
      <p>{count !== 0 && <h1>Messages: {count}</h1>}</p>
      {/* 或使用三元運算會避免錯誤數字0的呈現錯誤 */}
      <p>{count ? <h1>Messages: {count}</h1> : ''}</p>
    </>
  )
  //皆會得到 =>  Message: 1
}
