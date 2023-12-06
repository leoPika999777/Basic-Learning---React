import { useContext } from 'react'
import { ThemeContext } from '@/context/theme'
import List from '@/components/1205page-a/list'
import Link from 'next/link'

export default function PageA() {
  const { color, setColor } = useContext(ThemeContext)

  return (
    <>
      <h1>PageA</h1>
      <p>{color}</p>
      <button
        onClick={() => {
          setColor('dark')
        }}
      >
        暗黑
      </button>
      <button
        onClick={() => {
          setColor('light')
        }}
      >
        明亮
      </button>
      <List />

      <hr />
      <h5>a連結</h5>
      <a href="/cs-1206/page-b">To PageB</a>
      <hr />
      <h5>Link元件</h5>
      <Link href="/cs-1206/page-b">To PageB</Link>

    </>
  )
}
