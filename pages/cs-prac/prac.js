import React, { useState } from 'react'

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },

  {
    id: 4,
    text: 'd',
  },
  {
    id: 5,
    text: 'aa',
  },
]

export default function ReRender() {
  const [data, setData] = useState(objArray)

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <button
        onClick={() => {
          const newobj = { id: 99, text: 'xxx' }

          const newData = [newobj, ...data]

          setData(newData)
        }}
      >
        1.列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>

      <br />

      <button
        onClick={() => {
          const newobj = { id: 88, text: 'yyy' }

          const newData = [...data, newobj]

          setData(newData)
        }}
      >
        2.列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>

      <br />

      <button
        onClick={() => {
          const newID = self.crypto.randomUUID()
          const newobj = { id: newID, text: 'xxx' }

          const newData = [newobj, ...data]

          setData(newData)
        }}
      >
        3-1.列表最前面，使用randomUUID方式新增一個文字為xxx的物件
      </button>

      <br />

      <button
        onClick={() => {
          const newID = Number(new Date())
          const newobj = { id: newID, text: 'xxx' }

          const newData = [newobj, ...data]

          setData(newData)
        }}
      >
        3-2.列表最前面，使用時間日期物件方式新增一個文字為xxx的物件
      </button>

      <br />

      <button
        onClick={() => {
          const ids = data.map((v) => v.id)

          const newID = data.length > 0 ? Math.max(...ids) + 1 : 1

          const newobj = { id: newID, text: 'xxx' }

          const newData = [...data, newobj]

          setData(newData)
        }}
      >
        3-4.列表最後面，使用模仿資料庫ID遞增方式新增一個文字為xxx的物件
      </button>

      <br />

      <button
        onClick={() => {
          const ids = data.map((v) => v.id)

          const newID = data.length > 0 ? Math.max(...ids) + 1 : 1

          const newobj = { id: newID, text: 'yyy' }

          const newData = [...data, newobj]

          setData(newData)
        }}
      >
        4.列表最後面，新增一個文字為yyy的物件
      </button>

      <br />

      <button
        onClick={() => {
          const newData = data.filter((v, i) => {
            return v.text.includes('a')
          })

          setData(newData)
        }}
      >
        5.尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>

      <br />

      <button
        onClick={() => {
          const newData = data.filter((v, i) => {
            return v.text !== 'b'
          })

          setData(newData)
        }}
      >
        6.刪除文字為b的物件資料
      </button>

      <br />

      <button
        onClick={() => {
          const newData = data.filter((v, i) => {
            return v.id !== 4
          })

          setData(newData)
        }}
      >
        7.刪除id為4的物件資料
      </button>

      <br />

      <button
        onClick={() => {
          const foundIndex = data.findIndex((v, i) => {
            return v.id === 2
          })

          if (foundIndex > -1) {
            const aa = data.slice(0, foundIndex + 1)
            const bb = data.slice(foundIndex + 1)
            const newobj = { id: 5, text: 'bbb' }
            const newData = [...aa, newobj, ...bb]

            setData(newData)
          }
        }}
      >
        8.在id為2後面插入id為5與文字為bbb的物件
      </button>

      <br />

      <button
        onClick={() => {
          const newData = data.map((v, i) => {
            if (v.id === 3) return { ...v, text: 'ccc' }
            else return v
          })
          setData(newData)
        }}
      >
        9.取代id為3的文字為cccc
      </button>

      <br />

      <buttona
        onClick={() => {
          setData([])
        }}
      >
        10.清空表格
      </buttona>
    </>
  )
}
