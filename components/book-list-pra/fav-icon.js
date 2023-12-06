import React from 'react'
import Image from 'next/image'
// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

export default function FavIcon({ isbn, fav, handleToggleFav }) {
  return (
    <>
      <Image
        src={fav ? bookmarkIconFill : bookmarkIcon}
        alt=""
        onClick={() => {
          //setBooks(toggleFav(books, isbn))
          //按下去切換 我們將把他包成一個處理函式 相當於
          handleToggleFav(isbn)
        }}
      />
    </>
  )
}
