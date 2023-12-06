import { useTheme } from '@/hooks/use-theme'

export default function Item() {
  const { color } = useTheme()

  return (
    <>
      <div className={color}>
        <p className={color + '-highlight'}>
          這是一個項目文字，目前佈景顏色是: {color}
        </p>
      </div>
    </>
  )
}