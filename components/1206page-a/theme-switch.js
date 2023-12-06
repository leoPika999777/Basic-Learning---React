import Switch from 'react-switch'
import { IoMdSunny, IoMdMoon } from 'react-icons/io'
import { useContext } from 'react'
import { ThemeContext } from '@/context/theme'

// import { useTheme } from '@/hooks/use-theme'

export default function ThemeSwitch() {
  const { toggleColor, color } = useContext(ThemeContext)

  return (
    <Switch
      checked={color === 'light' ? true : false}
      height={50}
      width={120}
      offColor="#1d1f2f"
      onColor="#FDB813"
      checkedIcon={<IoMdSunny className={'switch-' + color} color="white" />}
      uncheckedIcon={<IoMdMoon className={'switch-' + color} color="white" />}
      onChange={toggleColor}
    />
  )
}