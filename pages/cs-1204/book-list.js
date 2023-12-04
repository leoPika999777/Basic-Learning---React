import { useState } from 'react'
import Image from 'next/image'

// 範例資料
import data from '@/data/books.json'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'
import { array } from 'prop-types'

function BookList() {
  // 擴充原本書籍的資料，多一個fav屬性(布林值 預設為false)
  //代表 有 or 沒有 加入收藏

  const initState = data.map((v, i) => {
    return { ...v, fav: false }
  })

  const [books, setBooks] = useState(initState)

  //純函式 - 單純改變陣列用
  // const aa = [
  //   { isbn: 'xxx', fav: true },
  //   { isbn: 'yyy', fav: false },
  // ]

  //toggle開關  真變假 假變真
  const toggleFav = (array, isbn) => {
    return array.map((v,i)=>{
      //如果裡面的isbn等於上面的isbn 
      if(v.isbn===isbn) return {...v, fav: !v.fav}
      else return v
    })
  }

  //console.log(toggleFav(aa,'xxx'))
  //console.log(toggleFav(aa,'yyy'))

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
                  <Image src={v.fav ? bookmarkIconFill : bookmarkIcon} 
                    alt="" 
                    onClick={()=>{
                      const newBooks =toggleFav(books, v.isbn)
                      setBooks(newBooks)
                      // 等於  setBooks(toggleFav(books, v.isbn))
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
