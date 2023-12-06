import { useEffect, useState } from 'react'
// 導入`.module.css`檔案
import styles from '@/styles/star.module.css'

//icon
import { IoIosStarHalf } from 'react-icons/io'

export default function Star({
  starCount = 5, //有幾個星星圖示 可以評分的最大值  starCount預設值為5，如果沒有傳入props.starCount，就會使用預設值
  initRating = 0, //initRating 一開始的評分分數(我給的) 預設為0 他本身是負元間
  onRatingChange = () => {}, // 當評分有改變時 要呼叫的函式
  color = 'gold',
  icon = <IoIosStarHalf />,
}) {
  // 滑鼠點按時的評分，一開始是0代表沒有評分
  const [rating, setRating] = useState(initRating)

  // 綁定外部來的initRating值 只要有改變 就會觸發同步化 setRating就會跟著變
  useEffect(() => {
    setRating(initRating)
  }, [initRating])

  // 滑鼠游標懸停(hover)評分，一開始是0代表沒有懸停
  // 懸停(hover)需要兩個事件配合：onMouseEnter + onMouseLeave
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <>
      <h1>星星評分範例</h1>
      <div>
        {/* 產生starCount個成員都是1的陣列，表達式語法  這邊預設是5*/}
        {Array(starCount)
          .fill(1)
          .map((v, i) => {
            // 每個星星的分數，剛好是索引值+1
            const score = i + 1

            return (
              <button
                key={i}
                className={styles['star-btn']}
                // 滑鼠移入星星區域時，設定hoverRating為目前的分數
                onMouseEnter={() => {
                  setHoverRating(score)
                }}
                // 滑鼠離開星星區域時，設定hoverRating為0
                onMouseLeave={() => {
                  setHoverRating(0)
                }}
                onClick={() => {
                  // 點按後設定分數
                  setRating(score)

                  // 回傳到父母元件
                  onRatingChange(score)
                }}
              >
                <span
                  // 判斷分數(score)如果小於等於目前的評分(rating)狀態，或小於等於目前的懸停評分，則套用亮起樣式
                  // className={
                  //   score <= rating || score <= hoverRating
                  //     ? styles['on']
                  //     : styles['off']
                  // }
                  //樣式的color

                  style={{
                    color:
                      score <= rating || score <= hoverRating ? color : 'gray',
                  }}
                >
                  {icon}
                </span>
              </button>
            )
          })}
      </div>
      <div>你現在評了{rating}分</div>
    </>
  )
}
