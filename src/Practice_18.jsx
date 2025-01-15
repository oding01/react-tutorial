// Context API 와 localStorage 그리고 useEffect 를 활용하여 다크/라이트 테마를 구현하라

import { createContext, useContext, useEffect, useState } from 'react'
import '@/App.css'

const THEME = {
  DEFAULT: 'system',
  DARK: 'dark',
  LIGHT: 'light',
}
const ThemeContext = createContext({
  theme: THEME.DEFAULT,
  setTheme: (state) => {},
})

function ThemeContextProvider({ children }) {
  const stored = localStorage.getItem('theme')
  const [theme, setTheme] = useState(stored ?? THEME.DEFAULT)

  useEffect(() => {
    if (theme === THEME.DEFAULT) {
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? document.body.classList.add('dark')
        : document.body.classList.remove('dark')
      localStorage.setItem('theme', THEME.DEFAULT)
    }
    if (theme === THEME.DARK) {
      document.body.classList.add('dark')
      localStorage.setItem('theme', THEME.DARK)
    }
    if (theme === THEME.LIGHT) {
      document.body.classList.remove('dark')
      localStorage.setItem('theme', THEME.LIGHT)
    }
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

function ThemeSelect() {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <select defaultValue={theme} onChange={(e) => setTheme(e.target.value)}>
      {Object.values(THEME).map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

function Practice_18() {
  return (
    <ThemeContextProvider>
      <h1>Theme</h1>
      <ThemeSelect />
    </ThemeContextProvider>
  )
}

export default Practice_18
