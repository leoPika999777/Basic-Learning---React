import React, { useState } from 'react'
import Star from '@/components/star-page/star'
import { BsFillBagHeartFill } from 'react-icons/bs'

export default function StarPage() {
  const [value, setValue] = useState(3)
  return (
    <>
      <Star
        initRating={value}
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
