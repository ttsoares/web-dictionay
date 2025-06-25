import { BrowserRouter } from 'react-router-dom'
import InnerApp from './components/InnerApp'
import { useTheme } from './hooks/useTheme'
import { useFont } from './hooks/useFont'

function App() {

  const { fontKey: currentFont, setFontKey: setCurrentFont, fontClass } = useFont()

  const [theme, toggleTheme] = useTheme()

  return (
    <BrowserRouter>
      <main>
        <InnerApp
          currentFont={currentFont}
          setCurrentFont={setCurrentFont}
          fontClass={fontClass}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </main>
    </BrowserRouter>
  )
}

export default App
