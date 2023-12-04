import { useState } from 'react'

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
    text: 'aa',
  },
]

export default function ObjectArray() {
  // 與呈現有關必需先成為state
  const [data, setData] = useState(objArray)

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
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
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)

          //縮短
          //setData([{ id: 99, text: 'xxx' }, ...data])
        }}
      >
        1.列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>

      <br />

      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        2.列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>

      <br />

      <button
        onClick={() => {
          //先寫出要新增的物件值
          //不重複id的產生方式

          // 3-1. 專用的函式庫uuid
          const newID = self.crypto.randomUUID()
          const newObj = { id: newID, text: 'xxx' }

          const newData = [newObj, ...data]

          setData(newData)
        }}
      >
        3-1.列表最前面，使用randomUUID方式新增一個文字為xxx的物件
        <br />
        (id不能與其它資料重覆)
      </button>

      <br />

      <button
        onClick={() => {
          // 3-2. 時間日期物件轉毫秒數值（整數）or use Date.now()
          // 不能多人聊天使用  可能時間會重複
          const newID = Number(new Date()) //+new DATE
          const newObj = { id: newID, text: 'xxx' }

          const newData = [newObj, ...data]

          setData(newData)

          // 3-3. 產生隨機字串/數字
        }}
      >
        3-2.列表最前面，使用時間日期物件方式新增一個文字為xxx的物件
        <br />
        (id不能與其它資料重覆)
      </button>

      <br />

      <button
        onClick={() => {
          // 3-4. 模仿資料庫ID遞增方式(只限於ID是數字)
          // 不能多人聊天使用  可能時間會重複
          const ids = data.map((v) => v.id) //變成一個陣列

          //有資料的話就從目前id最大值 去+1  沒有就從1
          const newID = data.length > 0 ? Math.max(...ids) + 1 : 1
          const newObj = { id: newID, text: 'xxx' }

          const newData = [...data, newobj]
          setData(newData)
        }}
      >
        3-4.列表最後面，使用模仿資料庫ID遞增方式新增一個文字為xxx的物件
        <br />
        (id不能與其它資料重覆)
      </button>

      <br />

      <button
        onClick={() => {
          const ids = data.map((v) => v.id) //變成一個陣列

          const newID = data.length > 0 ? Math.max(...ids) + 1 : 1
          const newObj = { id: newID, text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        4.列表最後面，新增一個文字為yyy的物件
        <br />
        (id不能與其它資料重覆)
      </button>

      <br />

      <button
        onClick={() => {
          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理

          //filter 叫做過濾   是陣列的方法 會產生新的陣列 所以他要呼叫
          //filter 跟map寫法一樣  ()=>{}  還有return
          //filter 跟map不同 return 是測試條件 是二分法 裡面是布林值
          const newData = data.filter((v, i) => {
            // v.text.includes('a') 代表物件裡面的每一個文字 有沒有包含a字串
            // 只會回傳有a字串的
            return v.text.includes('a')
          })

          // 3. 設定回原本的狀態中
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
            //產生新的狀態 裡面的文字不可以有b 相當於刪除b
          })
          setData(newData)

          // setData(data.filter((v))
        }}
      >
        6.刪除文字為b的物件資料
      </button>

      <br />

      <button
        onClick={() => {
          const newData = data.filter((v, i) => {
            return v.id !== 4
            //產生新的狀態 裡面的ID不可以有4 相當於刪除4
          })
          setData(newData)
        }}
      >
        7.刪除id為4的物件資料
      </button>

      <br />

      <button
        onClick={() => {
          //a. 尋找id=2的索引在哪
          const foundIndex = data.findIndex((v, i) => {
            return v.id === 2
          })
          //如果有找到 返回索引值  如果沒有 返回-1(因為陣列索引值從0開始 沒有-1)

          //如果有找到 if foundIndex 不等於 -1 代表有找到
          //也可以用if(foundIndex > -1){
          if (foundIndex !== -1) {
            //b. 建立要插入的物件值
            const newObj = { id: 5, text: 'bbb' }

            //c. 產生兩個字女陣列(分割陣列） 一個陣列是ID 1&2  另一個陣列是3&4
            const aa = data.slice(0, foundIndex + 1)
            const ab = data.slice(foundIndex + 1)

            //與新物件合併子女陣列(產生新陣列)
            const newData = [...aa, newObj, ...ab]

            //設定回原本狀態中
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
            if (v.id === 3) return { ...v, text: 'cccc' }
            else return v
          })
          setData(newData)
        }}
      >
        9.取代id為3的文字為cccc
      </button>

      <button
        onClick={() => {
          setData([])
        }}
      >
        10.清空表格
      </button>
    </>
  )
}
