import React from 'react'
import data from '@/data/Product.json'
import styles from '@/components/cart/cart.module.css'

export default function ProductList({
  addItem = () => {}, // 加入購物車用
}) {
  return (
    <>
      <ul className={styles['list']}>
        {data.map((v, i) => {
          return (
            <li key={v.id} className={styles['item']}>
              <div className={styles['w-400']}>{v.name}</div>
              <div>{v.price}</div>
              <div>
                <button
                  onClick={() => {
                    addItem(v)
                  }}
                >
                  加入購物車
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}