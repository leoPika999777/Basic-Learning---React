import React, { useState } from 'react'
import Star from '@/components/star-page/star'
import { BsFillBagHeartFill } from 'react-icons/bs'

export default function StarPage() {

  //給個狀態  一開始是三顆星星
  //value是他的分數 初始值 3
  const [value, setValue] = useState(3)
  return (
    <>
      <Star
        initRating={value}
        //當外部的值改變 透過initRating 傳遞
        
        onRatingChange={setValue}
        //color="#ff9900"
        //icon={<BsFillBagHeartFill />}
      />
      <hr />
      <hr />
      <button
        onClick={() => {
          setValue(1)
        }}
      >
        改變value為1
      </button>
      <button
        onClick={() => {
          setValue(5)
        }}
      >
        改變value為5
      </button>
    </>
  )
}
