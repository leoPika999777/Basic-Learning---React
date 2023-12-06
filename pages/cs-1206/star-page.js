import React, { useState } from 'react'
import Star from '@/components/star-page/star'

export default function StarPage() {
  const [value, setValue] = useState(0)
  const [value2, setValue2] = useState(0)
  return (
    <>
      <Star />
      <Star initRating={2} onRatingChange={setValue} />
      <Star initRating={5} onRatingChange={setValue2} />
    </>
  )
}
