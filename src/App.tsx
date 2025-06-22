import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import fontNames from './utils/font-names'
import InnerApp from './components/InnerApp'

function App() {
  const [currentFont, setCurrentFont] = useState(localStorage.getItem('current-font') ?? 'Serif')
  const fontClass = fontNames[currentFont]

  const [theme, setTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem('theme-color')
    if (savedTheme) return savedTheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    localStorage.setItem('current-font', currentFont)
  }, [currentFont])

  useEffect(() => {
    document.documentElement.className = theme === 'dark' ? 'dark' : ''
    localStorage.setItem('theme-color', theme)
  }, [theme])

  return (
    <BrowserRouter>
      <InnerApp
        currentFont={currentFont}
        setCurrentFont={setCurrentFont}
        fontClass={fontClass}
        theme={theme}
        setTheme={setTheme}
      />
    </BrowserRouter>
  )
}

export default App
