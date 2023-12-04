// https://zh-hans.react.dev/learn/updating-arrays-in-state#challenges
import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  //increment 增加產品的數量  用iD找
  const increment = (products, id) => {
    return products.map((v, i) => {
      //符合id數量的 就+1
      if (v.id === id) return { ...v, count: v.count + 1 }
      else return v
    })
  }

  // 減少數量，回傳新的陣列，符合id的商品數量-1
  const decrement = (products, id) => {
    return products.map((v, i) => {
      if (v.id === id) return { ...v, count: v.count - 1 }
      else return v
    })
  }

  const remove = (products, id) => {
    return products.filter((v, i) => {
      return v.id !== id
    })
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              // 呼叫increment()後，設定回原本的products狀態
              setProducts(increment(products, product.id))
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              // 如果目前數量=1，再按一次減數量按鈕->刪除
              if (product.count === 1) {
                // 刪除
                setProducts(remove(products, product.id))
              } else {
                // 呼叫decrement()後，設定回原本的products狀態
                setProducts(decrement(products, product.id))
              }
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}
