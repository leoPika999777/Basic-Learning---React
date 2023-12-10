import { useContext, useState } from 'react'

// 宣告要使用的context
import { createContext } from 'react'
const ThemeContext = createContext(null)

//這邊要導出兩個 下面第一個
// 如何讓元件吃得到被包裹的 要用children
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

//這邊要導出兩個 下面第二個  如果你使用我的useTheme 就使用這個鉤子
export function useTheme() {
  return useContext(ThemeContext)
}