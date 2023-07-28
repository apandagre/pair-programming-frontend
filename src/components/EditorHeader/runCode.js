import fetchData from "../../api/fetchData";
import languageToExtension from "../../pages/utils/languageToExtension";

export default async function (editor) {
  const { language, value, input } = editor;

  const sample = {
    language: language,
    stdin: input,
    files: [
      {
        name: `index.${languageToExtension[language]}`,
        content: value,
      },
    ],
  };

  const data = await fetchData("/compile", "POST", JSON.stringify(sample));

  if (data.exception) return data.exception;
  else return data.stdout;
}
