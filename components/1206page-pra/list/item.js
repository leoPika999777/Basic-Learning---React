import { useContext } from 'react'
import { ThemeContext } from '@/context/theme'

export default function Item() {
  const { color } = useContext(ThemeContext)

  return (
    <>
      <div>
        <p className={color}>這是一個項目文字，目前佈景顏色是:{color}</p>
      </div>
    </>
  )
}
