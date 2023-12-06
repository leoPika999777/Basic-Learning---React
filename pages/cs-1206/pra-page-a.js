import { useContext } from 'react'
import { ThemeContext } from '@/context/theme'
import List from '@/components/1206page-pra/list'
import Link from 'next/link'
import ThemeSwitch from '@/components/1206page-a/theme-switch'

export default function PageA() {
  //傳物件用物件結構
  const { color, toggleColor } = useContext(ThemeContext)
    
  return (
    <>
      <div>
        <h1>PageA</h1>
        <p>{color}</p>

        {/* <button
          onClick={() => {
            toggleColor('dark')
          }}
        >
          暗黑
        </button>

        <button
          onClick={() => {
            toggleColor('light')
          }}
        >
          明亮
        </button> */}

        <button onClick={toggleColor}>
          {color === 'light' ? '改為暗黑' : '改為明亮'}
        </button>

        <ThemeSwitch />

        <List />
        <hr />
        <Link href="/cs-1206/pra-page-b">LINK to pra-pageB</Link>

        <hr />
        <a href="/cs-1206/pra-page-b">a to pra-pageB</a>
      </div>
    </>
  )
}
