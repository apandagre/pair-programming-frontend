import { useEffect, useState } from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsTriangleFill } from "react-icons/bs";
import { FaPaw } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../../api/fetchData";
import { setOuput } from "../../redux/editor/editorSlice";
import ShareModal from "./ShareModal";
import useEditorShortcuts from "../../pages/hooks/useEditorShortcuts";
import runCode from "./runCode";

const EditorHeader = ({ roomName, language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const editor = useSelector((state) => state.editor);
  const dispatch = useDispatch();

  const _runCode = async () => {
    const result = await runCode(editor);
    dispatch(setOuput(result));
  };

  useEditorShortcuts(_runCode);

  return (
    <div className="sticky flex items-center justify-between border border-[#252528] bg-[#191919] px-8 py-1 text-white">
      <div className="flex items-center gap-1">
        <FaPaw size={20} />
        <span className="text-lg font-semibold">Name</span>
      </div>
      <div>
        <p className="text-lg space-x-3">
          <span>{roomName}</span>
          <span className="bg-zinc-600 text-zinc-300 items-center text-sm px-[6px] rounded-md py-[2px]">{language}</span> 
        </p>
      </div>
      <div className="flex items-center gap-3">
        {/* <LanguageDropdown /> */}
        <button
          onClick={_runCode}
          className="my-1 flex items-center gap-3 rounded-lg bg-green-700 py-2 px-4 text-sm text-white ring-1 ring-gray-600 hover:bg-white hover:text-[#161616]"
        >
          <BsTriangleFill size={16} className="rotate-90" />
          <span className="text-lg">Run</span>
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="my-1 flex items-center gap-2 rounded-lg bg-[#161616] py-2 px-4 text-sm text-white ring-1 ring-gray-600 hover:bg-white hover:text-[#161616]"
        >
          <AiOutlineShareAlt size={22} />
          <span className="text-lg">Share</span>
        </button>
      </div>

      <ShareModal
        onClose={() => {
          setIsOpen(() => setIsOpen(false));
        }}
        isOpen={isOpen}
        link={window.location.href}
      />
    </div>
  );
};

export default EditorHeader;
