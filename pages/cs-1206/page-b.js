import { useTheme } from '@/hooks/use-theme'
import Link from 'next/link'

export default function PageB() {
  const { color } = useTheme()

  return (
    <>
      <div className={color}>
        <h1>PageB</h1>
        <p>我是一些文字範例…</p>
      </div>
      <hr />
      <h5>a連結</h5>
      <a href="/cs-1206/page-a">到 PageA</a>
      <hr />
      <h5>Link元件</h5>
      <Link href="/cs-1206/page-a">到 PageA</Link>
    </>
  )
}