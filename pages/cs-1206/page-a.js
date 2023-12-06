//import { useContext } from 'react'
// import { ThemeContext } from '@/context/theme'
import { useTheme } from '@/hooks/use-theme'

import List from '@/components/page-a/list'
import Link from 'next/link'
import ThemeSwitch from '@/components/page-a/theme-switch'

export default function PageA() {
  //const { color, toggleColor } = useContext(ThemeContext)
  const { color, toggleColor } = useTheme()


  return (
    <>
      <h1>PageA</h1>
      <p>{color}</p>
      <ThemeSwitch />

      <List />
      <hr />
      <h5>a連結</h5>
      <a href="/cs-1206/page-b">到 PageB</a>
      <hr />
      <h5>Link元件</h5>
      <Link href="/cs-1206/page-b">到 PageB</Link>
    </>
  )
}