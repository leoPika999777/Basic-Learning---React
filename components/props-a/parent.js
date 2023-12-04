import React from 'react'
import Child from './child'

export default function Parent() {
  return (
    <>
      <h2>parent父母元件</h2>
      {/*  父母元件可以用類似HTML屬性給定值的語法，傳遞任何資料給子女元件 */}
      <Child
        text="Today We learn React"
        price={199}
        hasStock={false}
        sum={(a, b) => a + b}
        aa={[1,2,3, 'a']}
        objA={{ a: 1, b: 2 }}
      />
    </>
  )
}
