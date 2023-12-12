import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function EffectA() {
  const [total, setTotal] = useState(1)

  //強制渲染 強制元件re-render一次
  const [force, setForce] = useState(false)

  //鉤子只能在函式的最頂層(主體曲)呼叫  並且只能在函式裡面使用或是其他勾子裡
  //鉤子跟鉤子可以組成其他鉤子

  //樣式1:每次render都會執行一次
  // 使用率: 低(0~5%) 通常出現在自訂鉤子中
  // 用途: 通常出現在自訂勾子或是除錯時使用，少用的樣式
  useEffect(() => {
    console.log('每次render都會執行一次')
  })

  //第二個條件參數要保持空陣列
  //樣式2:只有第一次render之後 (after)會執行一次 ，之後不會再執行
  // 使用率: ~80% 對比react的生命週期為did
  // 用途: 元件與伺服器進行ajax/fetch初次獲取資料用，整合第三方js程式。對比react的生命周期為didMount(已經掛載)階段
  useEffect(() => {
    console.log('第一次render之後(After)會執行一次，之後不會再執行')
  }, [])
  //^^^^ 這裡要保持空陣列，代表不與任何變數相依，套用預設行為

  // 樣式3: 第一次render之後(After)會執行一次 + 放入相依陣列的變數有更動後(After)，會執行一次(didMount+didUpdate)
  // 使用率: ~20%
  // 用途: 不同資料使用同樣元件呈現時會使用到，例如商品頁面用不用的資料來呈現
  //這邊放total 當total有變動後這邊也會執行一次
  useEffect(() => {
    console.log(
      '第一次render之後(After)會執行一次 + 每次total有變動後(After)會再執行一次'
    )
  }, [total])

  // 樣式4: 元件被移出DOM前(Before)，會執行一次(willUnmount)
  // 使用率: 低(0~5%)
  // 用途: 通常搭配樣式2使用，移出前清除變數(計時器、記憶體)
  useEffect(() => {
    return () => {
      console.log('元件被移出DOM前(Before)，會執行一次')
    }
  }, [])

  return (
    <>
      <h1>useEffect基本範例</h1>
      <h2>{total}</h2>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setForce(!force)
        }}
      >
        強制重新渲染
      </button>
      <br />
      <Link href="/cs-1212/file-upload">到file-upload</Link>
    </>
  )
}
