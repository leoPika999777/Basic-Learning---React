import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/styles/product.module.css'

// {
//   "id": "1",
//   "picture": "https://via.placeholder.com/150",
//   "stock": 5,
//   "name": "iPhone 12 Pro",
//   "price": 25000,
//   "tags": "蘋果,大螢幕"
// },
//
// https://my-json-server.typicode.com/eyesofkids/json-fake-data/products

export default function List() {
  const [products, setProducts] = useState([])
  // 信號or開關狀態。這個狀態是用來控制載入指示動畫的，
  // 一開始要先顯示載入指示動畫，等到資料回來後，再關閉載入指示動畫
  const [isLoading, setIsLoading] = useState(true)

  // 1-1. 向伺服器要求資料用的 
  //用fetch 預設是使用get 這裡是promise資料類型
  const getProducts = async () => {
    const res = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
    )

    //資料轉成JS類型
    const data = await res.json()

    // 初次渲染
    console.log(data)
    // 1-2. 設定到state中，觸發重新渲染(re-render)
    // 進入重新渲染階段
    setProducts(data)

    // 關閉載入指示動畫
    // 因為關閉過快看不到動畫，讓載入動畫至少撥放2秒後關閉載入指示動畫
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  //1-3. 不可以直接用 getProducts(data) 會進入無窮迴圈

  //1-4. 初次渲染"後"，向伺服器要求資料，設定到狀態中
  useEffect(() => {
    getProducts()
  }, [])

  //1-5.觀察render渲染情況
  console.log('render')

  // 資料呈現
  const display = (
    <ul>
      {products.map((v, i) => {
        return (
          <li key={v.id}>
            <Link href={`/cs-1213/product/detail?pid=${v.id}`}>
              {v.name} & {v.price}
            </Link>
          </li>
        )
      })}
    </ul>
  )

  // 載入指示動畫
  const loader = (
    <>
      <div className={styles['lds-spinner']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )

  return (
    <>
      <h1>商品列表頁</h1>
      {/* 三元運算子，如果isLoading為true，顯示載入動畫(loader)，否則顯示資料(display) */}
      {isLoading ? loader : display}
    </>
  )
}
