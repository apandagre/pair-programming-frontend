import fetchData from "../../api/fetchData";

export default async function (editor) {
  const { language, value, input } = editor;

  const sample = {
    language: language,
    stdin: input,
    files: [
      {
        name: "index.py",
        content: value,
      },
    ],
  };

  const data = await fetchData("/compile", "POST", sample);

  if (data.exception) return data.exception;
  else return data.stdout;
}
