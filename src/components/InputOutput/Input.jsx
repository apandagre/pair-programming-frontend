import { useDispatch } from "react-redux";
import { setInput } from "../../redux/editor/editorSlice";

const Input = () => {
  const dispatch = useDispatch();

  return (
    <textarea
      className="bg-[#161616] w-full h-full overflow-scroll px-6 py-4 outline-none resize-none"
      placeholder={"enter your input (or testcases) 👀"}
      onChange={(e) => dispatch(setInput(e.target.value))}
    />
  );
};

export default Input;
