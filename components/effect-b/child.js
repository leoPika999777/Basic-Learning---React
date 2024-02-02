import { useEffect } from 'react'

export default function Child(props) {
  // 觀察props
  console.log(props)

  // 樣式3: 第一次render之後(After)會執行一次 + 放入相依陣列的變數有更動後(After)，會執行一次(didMount + didUpdate)
  useEffect(() => {
    console.log('name有變動')
  }, [props.name])
  // ^^^^^^^ 屬性是物件資料類型，所以依照參照相等性 {name: 'Iris'} !== {name: 'Iris'}
  // 所以應該要有didUpdate發生但沒有，原因是子元件會受到父母元件的渲染影響，
  // 父母元件沒有渲染時，並不會傳新的props給子女，所以子女元件並不會re-render(updating)

  // 觀察render情況
  console.log('render')

  return (
    <>
      <h2>子女元件(Child)</h2>
    </>
  )
}