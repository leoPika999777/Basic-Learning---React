import React from 'react'
import ProductList from '@/components/cart/product-list'
import styles from '@/components/cart/cart.module.css'

import Link from 'next/link'

import { useCart } from '@/hooks/use-cart'

export default function Product() {
  const { addItem } = useCart()

  return (
    <>
      <div className={styles['container']}>
        <Link href="/cs-1207/test/cart">到 購物車頁面</Link>
        <h3>商品列表</h3>
        <div className={styles['product']}>
          <ProductList
            // 從use-cart勾子導入
            addItem={addItem}
          />
        </div>
      </div>
    </>
  )
}
