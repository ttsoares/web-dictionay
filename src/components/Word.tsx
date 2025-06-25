import { useEffect, useRef } from 'react'
import type { DictionaryEntry } from "../utils/DictionaryTypes";

import Meaning from './Meaning'
import PlayIcon from '../assets/images/icon-play.svg?react'
import NewWindowIcon from '../assets/images/icon-new-window.svg?react'
interface WordProps {
  data: DictionaryEntry;
  isError: boolean;
}

export default function Word({ data, isError }: WordProps) {
  const validPhonetics = data.phonetics?.find(phonetics => phonetics.text && phonetics.audio)
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(validPhonetics?.audio)
  }, [data])

  function playAudio() {
    audioRef.current?.play()
  }

  const meanings = data.meanings.map((meaning, index) => <Meaning key={index} meaning={meaning} />)

  return (
    <section className="mt-10 mb-[5.25rem] tablet:mt-11 tablet:mb-[7.75rem]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-mobile-heading-l tablet:text-heading-l tablet:leading-heading-l font-bold tablet:mb-2">
            {data.word}
          </h1>
          <p className="text-purple text-body-m leading-body-m tablet:text-heading-m tablet:leading-heading-m">
            {validPhonetics?.text}
          </p>
        </div>
        {validPhonetics?.audio && (
          <button aria-label="Play" onClick={playAudio}>
            <PlayIcon />
          </button>
        )}
      </div>
      {meanings}
      <div className="mt-8 tablet:mt-[2.375rem] pt-6 tablet:pt-[1.125rem] border-t-1 border-t-[1px] border-t-gray-2 dark:border-t-black-4 text-body-s leading-body-s tablet:flex items-center">
        <div className="text-gray mb-2 underline tablet:mr-5 tablet:mb-0">Source</div>
        <div className="flex">
          <a href={data.sourceUrls[0]} className="underline mr-2" target="_blank">
            {data.sourceUrls[0]}
          </a>
          <NewWindowIcon />
        </div>
      </div>
    </section>
  )
}
