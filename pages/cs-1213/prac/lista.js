import { useState, useEffect } from 'react'

export default function List() {
  const [studentsRaw, setStudentsRaw] = useState([])

  const getStudents = async () => {
    const res = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )
    const data = await res.json()
    setStudentsRaw(data)
    setStudentsDisplay(data)
  }
  // 初次渲染"後"，向伺服器要求資料，設定到狀態中
  useEffect(() => {
    getStudents()
  }, [])

  // 要呈現在網頁上的資料
  const [studentsDisplay, setStudentsDisplay] = useState([])

  //todo: 處理信號
  //信號or開關狀態。這個狀態是用來控制是否正在輸入中文輸入法拼字
  const [isCompositing, setIsCompositing] = useState(false)

  //todo: 搜尋關鍵字
  const [keyword, setKeyword] = useState('')

  //todo: 處理排序
  // 排序 1由小到大，2由大到小，預設用id排
  const [sortBy, setSortBy] = useState('')

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

    if (sortBy === '3') {
        newStudents = [...newStudents].sort((a, b) => a.id - b.id)
      }
  
      if (sortBy === '4') {
        newStudents = [...newStudents].sort((a, b) => b.id - a.id)
      }

    // 預設用id 小至大
    if (sortBy === '' && newStudents.length > 0) {
      newStudents = [...newStudents].sort((a, b) => Number(a.id) - Number(b.id))
    }

    return newStudents
  }

  useEffect(() => {
    if (!isCompositing) {
      let newStudents = studentsRaw.filter((v) => v.name.includes(keyword))

      // 套用排序
      newStudents = handleSort(newStudents, sortBy)

      // 設定到要呈現的state中，觸發重新渲染(re-render)
      setStudentsDisplay(newStudents)
    }
  }, [keyword, sortBy, isCompositing])

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
      ID排序:
      <button
        onClick={() => {
          setSortBy('3')
        }}
      >
        由小到大排序
      </button>
      <button
        onClick={() => {
          setSortBy('4')
        }}
      >
        由大到小排序
      </button>
      
      
      <br />
      <ul>
        {studentsDisplay.map((v, i) => {
          return (
            <li key={v.id}>
              {v.id}/ {v.name}/ {v.age}
            </li>
          )
        })}
      </ul>
    </>
  )
}
