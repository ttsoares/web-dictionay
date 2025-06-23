import { useForm } from 'react-hook-form'

type FormData = {
  word: string
}

/**
 * The Search component renders a form with an input field
 * and an error message if the input is invalid.
 *
 * @param {{ onSubmit: (input: string) => void }} props
 * @prop {function} onSubmit - callback to be called when the form is submitted
 * @returns {JSX.Element}
 */
export default function Search({ onSubmit }: { onSubmit: (input: string) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  function submitHandler(data: FormData) {
    if (!data.word.trim()) return
    onSubmit(data.word)
  }

  const invalidClass = errors.word ? 'border-[1px] border-red' : ''

  return (
    <main>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          className={`w-full bg-gray-3 dark:bg-black-2 leading-[1.25rem] rounded-2xl py-[0.875rem] pl-6 pr-14 tablet:py-5 tablet:pl-6
          tablet:pr-18 text-default tablet:text-20 font-bold bg-search bg-no-repeat bg-right-4 placeholder:text-gray outline-none  focus:outline-purple ${invalidClass}`}
          placeholder="Search for any word…"
          {...register('word', { required: true })}
        />
        {errors.word && (
          <div className="text-red mt-2">Whoops, can&rsquo;t be empty&hellip;</div>
        )}
      </form>
    </main>
  )
}
