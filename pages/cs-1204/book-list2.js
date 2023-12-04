import { useState } from 'react'
import Image from 'next/image'

// 範例資料
import data from '@/data/books.json'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

function BookList() {
  // 擴充原本書籍的資料，多一個fav屬性(布林值 預設為false)
  //代表 有 or 沒有 加入收藏

  const initState = data.map((v, i) => {
    return { ...v, fav: false }
  })

  const [books, setBooks] = useState(initState)

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
                      //fav如果是true 實心  false 空心
                      //在img加入點擊後 改變icon值
                      const newData = book.map((v2, i2) => {
                        if (v.isbn === v2.isbn) return { ...v2, fav: !v2.fav }
                        else return v
                      })
                      setBooks(newData)
                    }}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default BookList
