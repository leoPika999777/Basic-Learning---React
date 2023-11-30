import React from 'react'

export default function Arraymap() {
  const aa = [1, 4, 9, 16]
  //1
  const ab = [] //空的，待for迴圈稍後裝進去
  for (let i = 0; i < aa.length; i++) {
    ab.push(aa[i] * 2)
  }
  console.log(aa)
  console.log(ab)

  //2
  //所有迭代方式都要照下面方式進行、迭代方式都必須陣列
  //const ac= aa.map(   (value,index)=>{}   )
  //aa所有的成員(值) 跟它的索引值(第幾個) 一個一個進來  index有可能不會用到
  const ac = aa.map((v, i) => {
    //map需要會傳值  回傳給ac
    return v * 3
  })
  console.log(ac)

  //3
  const ad = aa.map((v, i) => {
    //Key 只有在周遭有 array 的情境中才有意義。
    //return <li key={i.toString()}>{v}</li>
    return <li key={i}>{v}</li>
  })
  console.log(ad)

  //4
  // const foo = (x) => {

  //   const y = x || 2
  //   return y + 1
  // }
  


  return (
    <>
      <h1>Array map方法範例</h1>
      <ul>
        {aa.map((v, i) => {
          return <li key={i}>{v * 5}</li>
        })}
      </ul>
    </>
  )
}
