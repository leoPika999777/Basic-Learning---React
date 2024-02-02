import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '@/styles/product.module.css'

// {
//     "id": "107001",
//     "name": "張佳蓉",
//     "age": 22
//   },
//
// https://my-json-server.typicode.com/eyesofkids/json-fake-data/users
export default function List() {
  // 從伺服器來的原始資料，從伺服器設定資料後不會再變動
  const [studentsRaw, setStudentsRaw] = useState([])
  // 要呈現在網頁上的資料
  const [studentsDisplay, setStudentsDisplay] = useState([])
  // 信號or開關狀態。這個狀態是用來控制載入指示動畫的，
  // 一開始要先顯示載入指示動畫，等到資料回來後，再關閉載入指示動畫
  const [isLoading, setIsLoading] = useState(true)

  // 搜尋關鍵字
  const [keyword, setKeyword] = useState('')
  // 信號or開關狀態。這個狀態是用來控制是否正在輸入中文輸入法拼字
  const [isCompositing, setIsCompositing] = useState(false)
  // 排序 1由小到大，2由大到小，預設用id排
  const [sortBy, setSortBy] = useState('')

  // 向伺服器要求資料
  const getStudents = async () => {
    const res = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )

    const data = await res.json()

    console.log(data)
    // 設定到state中，觸發重新渲染(re-render)
    setStudentsRaw(data)
    setStudentsDisplay(data)

    // 關閉載入指示動畫
    // 因為關閉過快看不到動畫，讓載入動畫至少撥放2秒後關閉載入指示動畫
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  // 處理排序
  const handleSort = (students, sortBy) => {
    let newStudents = [...students]

    // 以age排序-由大到小
    if (sortBy === '1') {
      newStudents = [...newStudents].sort((a, b) => a.age - b.age)
    }

    if (sortBy === '2') {
      newStudents = [...newStudents].sort((a, b) => b.age - a.age)
    }

    // 預設用id 小至大
    if (sortBy === '' && newStudents.length > 0) {
      newStudents = [...newStudents].sort((a, b) => Number(a.id) - Number(b.id))
    }

    return newStudents
  }

  // 初次渲染"後"，向伺服器要求資料，設定到狀態中
  useEffect(() => {
    getStudents()
  }, [])

  // studentsRaw與studentsDisplay間的聯動關係
  // 每次進行搜尋或排序，都會先從 studentsRaw開始，之後變動完設定到studentsDisplay
  useEffect(() => {
    // 如果正在輸入中文輸入法拼字，就不要執行搜尋
    if (!isCompositing) {
      let newStudents = studentsRaw.filter((v) => v.name.includes(keyword))

      // 套用排序
      newStudents = handleSort(newStudents, sortBy)

      // 設定到要呈現的state中，觸發重新渲染(re-render)
      setStudentsDisplay(newStudents)
    }
  }, [keyword, sortBy, isCompositing])

  // 觀察render情況
  // console.log('render')

  // 資料呈現
  const display = (
    <ul>
      {studentsDisplay.map((v, i) => {
        return (
          <li key={v.id}>
            {v.id}/ {v.name}/ {v.age}
          </li>
        )
      })}
    </ul>
  )

  // 載入指示動畫
  const loader = (
    <>
      <div className={styles['lds-spinner']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )

  return (
    <>
      <h1>學生列表頁</h1>
      姓名:{' '}
      <input
        type="text"
        value={keyword}
        // 使用者開始進行輸入法
        onCompositionStart={() => {
          setIsCompositing(true)
        }}
        // 使用者結束輸入法
        onCompositionEnd={() => {
          setIsCompositing(false)
        }}
        onChange={(e) => {
          setKeyword(e.target.value)
        }}
      />
      <br />
      年紀排序:
      <button
        onClick={() => {
          setSortBy('1')
        }}
      >
        由小到大排序
      </button>
      <button
        onClick={() => {
          setSortBy('2')
        }}
      >
        由大到小排序
      </button>
      <br />
      {/* 三元運算子，如果isLoading為true，顯示載入動畫(loader)，否則顯示資料(display) */}
      {isLoading ? loader : display}
    </>
  )
}
