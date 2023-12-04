import React from 'react'
import Child from './child'

export default function Parent() {
    const aa=[1,2,3,'a']
    const sum = (x, y) => x + y



  return (
    <>
      <h2>parent父母元件</h2>
      {/*  父母元件可以用類似HTML屬性給定值的語法，傳遞任何資料給子女元件 */}
      <Child
        text="Today We learn React"
        //price={199}
        hasStock={false}
        aa={true}
        objA={{ a: 1, b: 2 }}
      />
    </>
  )
}
