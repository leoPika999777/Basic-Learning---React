import React from 'react'
import styles from '@/components/cart/cart.module.css'

export default function CartList({ items, increment, decrement, remove }) {
  return (
    <>
      <ul className={styles['list']}>
        {items.map((v, i) => {
          return (
            <li key={v.id} className={styles['item']}>
              <div className={styles['w-400']}>{v.name}</div>
              <div>{v.price}</div>
              <div>
                <button
                  onClick={() => {
                    increment(items, v.id)
                  }}
                >
                  +
                </button>
                <span>{v.qty}</span>
                <button
                  onClick={() => {
                    if (v.qty === 1) {
                      remove(items, v.id)
                      return
                    }
                    decrement(items, v.id)
                  }}
                >
                  -
                </button>
              </div>
              <div>{v.subtotal}</div>
              <div>
                <button
                  onClick={() => {
                    remove(items, v.id)
                  }}
                >
                  移除
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
