import { useState } from 'react'
import ProductList from '@/components/cart/product-list'
import CartList from '@/components/cart/cart-list'
import styles from '@/components/cart/cart.module.css'

export default function Cart() {
  const [items, setItems] = useState([])

  // 刪除商品，回傳新的陣列，符合id的商品不要
  const remove = (items, id) => {
    const newItems = items.filter((v, i) => {
      return v.id !== id
    })
    setItems(newItems)
  }

  // 在購物車中，增加數量，回傳新的陣列，符合id的商品數量+1
  // 數量增加減少 變化的時候 才會影響到小計
  const increment = (items, id) => {
    //1 2
    const newItems = items.map((v, i) => {
      if (v.id === id)
        return { ...v, qty: v.qty + 1, subtotal: v.price * (v.qty + 1) }
      else return v
    })

    // 3
    setItems(newItems)
  }

  // 在購物車中，減少數量，回傳新的陣列，符合id的商品數量-1
  const decrement = (items, id) => {
    const newItems = items.map((v, i) => {
      if (v.id === id)
        return { ...v, qty: v.qty - 1, subtotal: v.price * (v.qty - 1) }
      else return v
    })

    setItems(newItems)
  }

  // 加入購物車
  const addItem = (item) => {
    // 檢查是否存在
    const index = items.findIndex((v, i) => {
      return v.id === item.id
    })

    console.log(index)

    // 如果有找到
    //如果沒找到 會是-1  找到就是> -1
    // 如果找到  數量就+1
    //參考object 第九題
    if (index > -1) {
      // 數量+1
      increment(items, item.id)
      return // 跳出函式，接下來的程式不執行
    }

    // 以下是如果沒找到的話
    // 原本的商品資料物件中沒有數量(qty)，所以要加入qty
    // 價格就是 商品的數量*價格  一開始當然是1
    const newItem = { ...item, qty: 1, subtotal: item.price }
    //1 2 3
    setItems([...items, newItem])
  }

  const calTotalItems = () => {
    let total = 0

    for (let i = 0; i < items.length; i++) {
      total += items[i].qty
    }

    return total
  }

  const calTotalPrice = () => {
    let total = 0

    for (let i = 0; i < items.length; i++) {
      total += items[i].subtotal
    }

    return total
  }


  // reduce (累加，歸納) 2 -> 1
  // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  const totalItems = items.reduce((acc, v) => acc + v.qty, 0)
  const totalPrice = items.reduce((acc, v) => acc + v.subtotal, 0)
  // const totalPrice = items.reduce((acc, v) => acc + v.qty*v.price, 0)


  return (
    <>
      <div className={styles['container']}>
        <h3>商品列表</h3>
        <div className={styles['product']}>
          <ProductList addItem={addItem} />
        </div>
        <h3>購物車</h3>
        <div className={styles['cart']}>
          <CartList
            items={items}
            increment={increment}
            decrement={decrement}
            remove={remove}
          />
        </div>
        <hr />
        <div>
          總數量: {calTotalItems()} / 總金額: {calTotalPrice()}
        </div>
      </div>
    </>
  )
}
