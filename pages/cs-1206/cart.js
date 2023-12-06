import { useState } from 'react'
import ProductList from '@/components/cart/product-list'
import CartList from '@/components/cart/cart-list'
import styles from '@/components/cart/cart.module.css'

export default function Cart() {
  const [items, setItems] = useState([])

  const addItem = (item) => {
    // const newObj = { id: 88, text: 'yyy' }
    //const newData = [...data, newObj]
   
    setItems([...items, item])
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
          <CartList items={items} />
        </div>
        <hr />
        <div>總數量: 123 / 總金額: 123000</div>
      </div>
    </>
  )
}
  