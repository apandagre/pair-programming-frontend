import { useSelector } from "react-redux";

const Output = () => {
  const { output } = useSelector((state) => state.editor);

  return (
    <div className="w-full h-full">
      <div className="px-6 py-4 whitespace-pre-wrap">{output}</div>
    </div>
  );
};

export default Output;
