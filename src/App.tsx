import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { BrowserRouter } from 'react-router-dom'
import fontNames from './utils/font-names'
import InnerApp from './components/InnerApp'

function App() {
  const [currentFont, setCurrentFont] = useState(localStorage.getItem('current-font') ?? 'Serif')
  const fontClass = fontNames[currentFont]

  useEffect(() => {
    localStorage.setItem('current-font', currentFont)
  }, [currentFont])

  return (
    <BrowserRouter>
      <InnerApp
        currentFont={currentFont}
        setCurrentFont={setCurrentFont}
        fontClass={fontClass}
      />
    </BrowserRouter>
  )
}

export default App
