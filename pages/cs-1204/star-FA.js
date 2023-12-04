import React from 'react'
import Star from '@/components/common/star'

export default function StarTest() {
  return (
    <>
      <Star />
      <Star starCount={6} />
      <Star starCount={10} />
    </>
  )
}