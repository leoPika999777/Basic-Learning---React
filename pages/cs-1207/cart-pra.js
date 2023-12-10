import { useState } from 'react'
import ProductList from '@/components/cart-pra/product-list'
import CartList from '@/components/cart-pra/cart-list'
import styles from '@/components/cart-pra/cart.module.css'
import { RedirectType } from 'next/navigation'

export default function Cart() {
  const [items, setItems] = useState([])

  const remove = (items, id) => {
    const newItems = items.filter((v, i) => {
      return v.id !== id
    })
    setItems(newItems)
  }

  const increment = (items, id) => {
    const newItems = items.map((v, i) => {
      if (v.id === id)
        return { ...v, qty: v.qty + 1, subtotal: v.price * (v.qty + 1) }
      else return v
    })
    setItems(newItems)
  }
  const decrement = (items, id) => {
    const newItems = items.map((v, i) => {
      if (v.id === id)
        return { ...v, qty: v.qty - 1, subtotal: v.price * (v.qty - 1) }
      else return v
    })

    setItems(newItems)
  }

  const addItem = (item) => {
    // 2. 先檢查是否存在  加進去的 跟目前存在的 是否相同
    const index = items.findIndex((v, i) => {
      return v.id === item.id
    })

    if (index > -1) {
      // 數量+1
      increment(items, item.id)
      return // 跳出函式，接下來的程式不執行
    }

    const newItem = { ...item, qty: 1, subtotal: item.price }
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
