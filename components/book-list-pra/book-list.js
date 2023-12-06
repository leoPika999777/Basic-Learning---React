import { useState } from 'react'


// 範例資料
import data from '@/data/books.json'

import BookItem from './book-item'


export default function BookList() {
  // 擴充原本書籍的資料，多一個fav屬性(布林值 預設為false)
  //代表 有 or 沒有 加入收藏

  const initState = data.map((v, i) => {
    return { ...v, fav: false }
  })

  //宣告初始化的狀態
  const [books, setBooks] = useState(initState)

  //toggle開關  真變假 假變真
  const toggleFav = (array, isbn) => {
    return array.map((v, i) => {
      //如果裡面的isbn等於上面的isbn 傳入的布林值改成反向
      if (v.isbn === isbn) return { ...v, fav: !v.fav }
      else return v
    })
  }

  const handleToggleFav = (isbn) => {
    //按下去切換 我們將把他包成一個處理函式
    setBooks(toggleFav(books, isbn))
  }

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((v, i) => {
            const { isbn, title, author, fav } = v
            return (
              <BookItem
                key={isbn}
                isbn={isbn}
                title={title}
                author={author}
                fav={fav}
                handleToggleFav={handleToggleFav}
              />
            )
          })}

          {/* {books.map((v, i) => {
            return (
              <tr key={v.isbn}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>
                  <Image
                    src={v.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                    onClick={() => {
                      // setBooks(toggleFav(books, v.isbn))
                      handleToggleFav(isbn)
                    }}
                  />
                </td>
              </tr>
            )
          })} */}
        </tbody>
      </table>
    </>
  )
}


