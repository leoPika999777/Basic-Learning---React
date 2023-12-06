import { useContext } from 'react'
import { ThemeContext } from '@/context/theme'
import List from '@/components/1205page-a/list'

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
    </>
  )
}
