import { useEffect, useState } from "react";
import { AiOutlineShareAlt, AiOutlineWhatsApp } from "react-icons/ai";
import { FaPaw } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { HiLink } from "react-icons/hi";
import { BsTriangleFill } from "react-icons/bs";
import Modal from "../Modal/Modal";
import ShareModal from "./ShareModal";
import { GoTriangleDown } from "react-icons/go";

const EditorHeader = ({ link }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("isOpen? ", isOpen);
  }, [isOpen]);

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
        <button
          onClick={() => {}}
          className="my-1 flex items-center gap-2 rounded-lg bg-[#161616] py-2 px-4 text-sm text-white ring-1 ring-gray-600 hover:bg-white hover:text-[#161616]"
        >
          <span className="text-lg">Python</span>
          <GoTriangleDown size={20} />
        </button>
        <button
          onClick={() => console.log("run code")}
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
          console.log("closing..");
          setIsOpen(() => setIsOpen(false));
        }}
        isOpen={isOpen}
        link={link}
      />
    </div>
  );
};

export default EditorHeader;
