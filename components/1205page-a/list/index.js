import Item from './item'

export default function List() {
  return (
    <>
      <h1>列表</h1>
      <ul>
        <li>
          <Item />
        </li>
        <li>
          <Item />
        </li>
      </ul>
    </>
  )
}