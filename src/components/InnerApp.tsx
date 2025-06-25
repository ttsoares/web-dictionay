import { Dispatch, SetStateAction } from 'react'
import { useDictionaryFetch } from '../hooks/useDictionaryFetch'
import Header from './Header'
import Search from './Search'
import Word from './Word'
import NotFound from './NotFound'

interface InnerAppProps {
  currentFont: string
  setCurrentFont: Dispatch<SetStateAction<string>>
  fontClass: string
  theme: string
  toggleTheme: () => void
}

export default function InnerApp({ currentFont, setCurrentFont, fontClass, theme, toggleTheme }: InnerAppProps) {

  const { word, isLoading, isError, submitNewWord } = useDictionaryFetch()

  if (isLoading && word?.word === "wind") {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-black">
        <img
          src="/preview.jpg"
          alt="App preview"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    )
  }

  return (
    <div className={`${fontClass} desktop:container px-6 tablet:px-10 text-black-3 dark:text-white text-body-m`}>
      <Header
        currentFont={currentFont}
        applyFont={setCurrentFont}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Search onSubmit={submitNewWord} />
      {isError && <NotFound />}
      {!isLoading && !isError && word && <Word data={word} isError={isError} />}
    </div>
  )
}