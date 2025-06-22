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
}

export default function InnerApp({ currentFont, setCurrentFont, fontClass }: InnerAppProps) {
  const { word, isLoading, isError, submitNewWord } = useDictionaryFetch()

  if (isLoading) return <div>Loading...</div>

  return (
    <div
      className={`${fontClass} desktop:container px-6 tablet:px-10 text-black-3 dark:text-white text-body-m`}
    >
      <Header currentFont={currentFont} applyFont={setCurrentFont} />
      <Search onSubmit={submitNewWord} />
      {isError && <NotFound />}
      {!isLoading && !isError && word && <Word data={word} isError={isError} />}
    </div>
  )
}