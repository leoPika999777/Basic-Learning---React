import React, { useState } from 'react'
// 導入.module.css檔案
import styles from '@/styles/star.module.css'

export default function Star() {
  const [rating, setRating] = useState(0)
  return (
    <>
      <h1>星星評分範例</h1>
      <div>
        {/* 產生5個成員都是1的陣列  表達式語法 */}
        {/* 一個陣列 5個成員(5個值)  等於這構造打五個洞  開始塞1 可以在log裡面輸入Array(5).fill(1) 查看  */}
        {Array(5)
          .fill(1)
          .map((v, i) => {
            const score = i + 1

            return (
              <button
                key={i}
                className={styles['star-btn']}
                onClick={() => {
                  setRating(score)
                }}
              >
                <span
                  role="presentation"
                  //分數小於現在的評分  就亮起來
                  className={score <= rating ? styles['on'] : styles['off']}
                >
                  &#9733;
                </span>
              </button>
            )
          })}
      </div>
      <div>你現在選了{rating}分</div>
    </>
  )
}
