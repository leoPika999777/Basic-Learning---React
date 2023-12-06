import { useContext, useState } from 'react'

// 宣告要使用的context
import { createContext } from 'react'
const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [color, setColor] = useState('light') // 'light' | 'dark'

  const toggleColor = () => {
    if (color === 'light') setColor('dark')
    else setColor('light')
  }

  return (
    <ThemeContext.Provider value={{ color, toggleColor }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}