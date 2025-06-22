import React from 'react'

export default function NotFound() {
  return (
    <main className="my-20 tablet:my-[8.25rem] text-center">
      <div className="text-heading-l">😱</div>
      <h5 className="font-bold mt-5 tablet:mt-11">No definitions found</h5>
      <p className="mt-3 tablet:mt-6">
        Word not found! Please check the word you are looking for and try again.
      </p>
    </main>
  )
}
