import { useState } from 'react'
// 範例資料
import data from '@/data/books.json'
import BookItem from './book-item'

export default function BookList() {
  // 擴充原本書籍的資料，多一個fav屬性(布林值，預設為false)，代表有/沒有加入收藏
  const initState = data.map((v, i) => {
    return { ...v, fav: false }
  })

  // 宣告初始化的狀態
  const [books, setBooks] = useState(initState)

  // 純函式 - 單純改變陣列用，狀態通用步驟的1+2步
  const toggleFav = (array, isbn) => {
    return array.map((v, i) => {
      if (v.isbn === isbn) return { ...v, fav: !v.fav }
      else return v
    })
  }

  // 專門處理切換收藏狀態，特別寫出是為了要簡化傳入到子女元件的方法
  // 不需要再傳入書籍陣列與設定狀態的方法，只需要傳入書號(isbn)即可
  const handleToggleFav = (isbn) => {
    setBooks(toggleFav(books, isbn))
  }

  // const aa = [
  //   { isbn: 'xxx', fav: true },
  //   { isbn: 'yyy', fav: false },
  // ]
  // console.log(toggleFav(aa, 'xxx'))
  // console.log(toggleFav(aa, 'yyy'))

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
            // 解構賦值，先把v中的屬性取出來，放在要傳送的屬性名常數中
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
        </tbody>
      </table>
    </>
  )
}