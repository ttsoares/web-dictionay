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
  setTheme: Dispatch<SetStateAction<string>>
}

/**
 * InnerApp component that manages the main application state and renders
 * the header, search input, and word details.
 *
 * @param {InnerAppProps} props - The properties for the InnerApp component.
 * @param {string} props.currentFont - The currently selected font.
 * @param {Dispatch<SetStateAction<string>>} props.setCurrentFont - Function to update the current font.
 * @param {string} props.fontClass - The CSS class name for the current font.
 * @param {string} props.theme - The current theme, either 'light' or 'dark'.
 * @param {Dispatch<SetStateAction<string>>} props.setTheme - Function to update the theme.
 *
 * This component handles:
 * - Fetching word data from the dictionary API.
 * - Displaying a loading state while data is being fetched.
 * - Displaying an error message if the word is not found.
 * - Rendering the word details if data is successfully fetched.
 */

export default function InnerApp({ currentFont, setCurrentFont, fontClass, theme, setTheme }: InnerAppProps) {

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
    <main
      className={`${fontClass} desktop:container px-6 tablet:px-10 text-black-3 dark:text-white text-body-m`}
    >
      <Header
        currentFont={currentFont}
        applyFont={setCurrentFont}
        theme={theme}
        setTheme={setTheme}
      />
      <Search onSubmit={submitNewWord} />
      {isError && <NotFound />}
      {!isLoading && !isError && word && <Word data={word} isError={isError} />}
    </main>
  )
}