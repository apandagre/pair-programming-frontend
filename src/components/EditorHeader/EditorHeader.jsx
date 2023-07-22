import { useEffect, useState } from "react";
import { AiOutlineShareAlt, AiOutlineWhatsApp } from "react-icons/ai";
import { FaPaw } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { HiLink } from "react-icons/hi";
import { BsTriangleFill } from "react-icons/bs";
import Modal from "../Modal/Modal";
import ShareModal from "./ShareModal";
import { GoTriangleDown } from "react-icons/go";
import LanguageDropdown from "./LanguageDropdown";
import { useDispatch, useSelector } from "react-redux";
import { setOuput } from "../../redux/editor/editorSlice";

const EditorHeader = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false);
  const editor = useSelector((state) => state.editor);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("isOpen? ", isOpen);
  }, [isOpen]);

  const runCode = async () => {
    const { language, value, input } = editor;
    console.log(language, value, input);

    //   {
    //     "language": "python",
    //     "stdin": "Peter",
    //     "files": [
    //         {
    //             "name": "index.py",
    //             "content": "import sys\nname = sys.stdin.readline()\nprint('Hello '+ name)"
    //         }
    //     ]
    // }

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

    const response = await fetch("http://localhost:8080/compile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhc2hpc2hAZ21haWwuY29tIiwiZXhwIjoxNjkwMDEwNDI5LCJpYXQiOjE2OTAwMDY4Mjl9.ckiAnmGLL94UqbCow4JByNDLLc4ZTgbYZ0v4cvvAfnw",
      },
      body: JSON.stringify(sample),
    });

    const data = await response.json();

    console.log(response, data);

    if (data.exception) dispatch(setOuput(data.exception));
    else dispatch(setOuput(data.stdout));
  };

  return (
    <div className="sticky flex items-center justify-between border border-[#252528] bg-[#191919] px-8 py-1 text-white">
      <div className="flex items-center gap-1">
        <FaPaw size={20} />
        <span className="text-lg font-semibold">Name</span>
      </div>
      <div>
        <span className="text-lg">the-gray-space</span>
      </div>
      <div className="flex items-center gap-3">
        {/* <LanguageDropdown /> */}
        <button
          onClick={runCode}
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
        link={link}
      />
    </div>
  );
};

export default EditorHeader;
