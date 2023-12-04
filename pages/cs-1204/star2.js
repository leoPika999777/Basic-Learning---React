import React, { useState } from 'react'
// 導入.module.css檔案
import styles from '@/styles/star.module.css'

export default function Star() {
  const [rating, setRating] = useState(0)
  return (
    <>
      <h1>星星評分範例</h1>
      <div>
        <span
          role="presentation"
          className={rating >= 1 ? styles['on'] : ''}
          onClick={() => {
            setRating(1)
          }}
        >
          &#9733;
        </span>
        <span
          role="presentation"
          className={rating >= 2 ? styles['on'] : ''}
          onClick={() => {
            setRating(2)
          }}
        >
          &#9733;
        </span>
        <span
          role="presentation"
          className={rating >= 3 ? styles['on'] : ''}
          onClick={() => {
            setRating(3)
          }}
        >
          &#9733;
        </span>
        <span
          role="presentation"
          className={rating >= 4 ? styles['on'] : ''}
          onClick={() => {
            setRating(4)
          }}
        >
          &#9733;
        </span>
        <span
          role="presentation"
          className={rating >= 5 ? styles['on'] : ''}
          className={rating >= 5 ? styles['on'] : ''}
          onClick={() => {
            setRating(5)
          }}
        >
          &#9733;
        </span>
      </div>
      <div>你現在選了{rating}分</div>
    </>
  )
}
