import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "./useFetch";
import type { DictionaryEntry } from "../utils/DictionaryTypes";

export function useDictionaryFetch() {
  const [word, setWord] = useState<DictionaryEntry | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [queryParams, setQueryParams] = useSearchParams();

  const initialInput = queryParams.get("word") ?? "wind";

  function fetchData(input: string) {
    setIsLoading(true);
    setIsError(false);

    useFetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`,
      (data: DictionaryEntry[]) => {
        setWord(data[0]);
      },
      setIsLoading,
      setIsError
    );
  }

  // Fetch on first mount or when query param changes
  useEffect(() => {
    fetchData(initialInput);
  }, [initialInput]);

  function submitNewWord(input: string) {
    if (!input.trim()) return;
    setQueryParams({ word: input });
  }

  return { word, isLoading, isError, submitNewWord };
}

export default useDictionaryFetch;
