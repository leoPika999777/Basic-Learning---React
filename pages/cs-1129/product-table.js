// 導入時就自動轉為JS資料格式
import data from '@/data/Product.json'
import Image from 'next/image'
import { useMyState } from '@/hooks/use-mystates'

export default function ProductTable() {
  const [total, setTotal] = useMyState(0)
  // 如果＿app.js那邊回傳的是一個物件 ＝>  const {state:total, changeState:setTotal}= useMyState(0)

  console.log(data)

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                {/* <td><img src={'/pics/'+v.photos.split(',')[0]}  /></td> */}
                <td>
                  <img
                    src={`/pics/${v.photos.split(',')[0]}`}
                    width={150}
                    height={100}
                    alt=""
                  />
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
