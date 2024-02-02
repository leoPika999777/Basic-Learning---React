import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
//勾子裡面的路由器 有這個可以看到網址上的12345678
import Link from 'next/link'

// 到單一商品的網址(最後使用 id):
// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/1

export default function Detail() {
  // 2-1 先呼叫鉤子. 由router中獲得動態路由(屬性名稱pid，即檔案[pid].js)的值
  // 執行(呼叫)useRouter，會回傳一個路由器
  // router.query中會包含pid屬性
  // router.isReady(布林值)，true代表本元件已完成水合作用(hydration)，可以取得router.query的值
  const router = useRouter()

  const [product, setProduct] = useState({
    id: '',
    name: '',
    age: 0,

  })

  // 向伺服器要求資料
  const getProduct = async (pid) => {
    const res = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users' +
        pid
    )

    // data會是物件值
    const data = await res.json()

    console.log(data)
    // 設定到state中，觸發重新渲染(re-render)
    setProduct(data)
  }

  //console.log(router.query, ' isReady=', router.isReady)

  useEffect(() => {
    // 如果isReady是true，確保能得到query的值
    if (router.isReady) {
      const { pid } = router.query
      console.log(pid)
      // 向伺服器要單一商品的資料
      getProduct(pid)
    }
  }, [router.isReady])

  // 觀察render情況
  console.log('render')

  return (
    <>
      <h1>商品詳細頁</h1>
      <p>ID: {product.id}</p>
      <p>名稱: {product.name}</p>
      <p>年紀: {product.age}</p>
      <hr />
      <Link href="/cs-1213/pra/list">回列表頁</Link>
      <button onClick={()=>{
        alert('現在幫您導向列表頁')

        router.push('/cs-1213/pra/list')
      }}>回列表頁</button>
    </>
  )
}