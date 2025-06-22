import type { Meaning } from "../utils/DictionaryTypes";

interface MeaningProps {
  meaning: Meaning;
}
export default function MeaningComponent({ meaning }: MeaningProps) {
  // Flatten all synonyms from all definitions under this meaning
  const meaningSynonyms = meaning.definitions.flatMap((def) => def.synonyms);

  return (
    <section className="mt-8 tablet:mt-10 text-default tablet:text-body-m">
      {/* Part of Speech */}
      <div className="flex items-center mb-8 tablet:mb-10">
        <h2 className="font-bold italic mr-4 tablet:text-heading-m tablet:leading-heading-m">
          {meaning.partOfSpeech}
        </h2>
        <hr className="w-full border-gray-2 dark:border-black-4" />
      </div>

      {/* Meaning Title */}
      <p className="text-gray tablet:text-heading-s tablet:leading-heading-s">Meaning</p>

      {/* Definitions List */}
      <ul className="list-disc mx-4 mt-4 marker:text-purple marker:text-[15px]">
        {meaning.definitions.map((definition, index) => (
          <li key={index} className="mt-[0.875rem]">
            <p>{definition.definition}</p>
            {definition.example && (
              <p className="text-gray mt-3">"{definition.example}"</p>
            )}

            {/* Optional: Show synonyms inside each definition */}
            {definition.synonyms.length > 0 && (
              <div className="mt-2">
                <p className="text-purple font-semibold">Synonyms:</p>
                <ul className="flex flex-wrap gap-x-2">
                  {definition.synonyms.map((syn, idx) => (
                    <li key={idx}>{syn}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Synonyms across the whole meaning */}
      {meaningSynonyms.length > 0 && (
        <div className="flex items-center mt-6 tablet:mt-10 gap-6">
          <p className="text-gray">Synonyms (all definitions):</p>
          <ul className="flex flex-wrap gap-x-6 text-purple font-bold">
            {meaningSynonyms.map((syn, idx) => (
              <li key={idx}>{syn}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
