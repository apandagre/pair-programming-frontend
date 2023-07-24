import React, { useEffect, useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { HiLink } from "react-icons/hi";
import Modal from "../Modal/Modal";

const ShareModal = ({ onClose, isOpen, link }) => {
  const [copy, setCopy] = useState(false);

  // use this message later
  const body = `Hi, Use this link ${link}`;
  const subject = "Room invitation";

  useEffect(() => {
    setCopy(false);
  }, [isOpen]);

  return (
    <Modal onClose={onClose} open={isOpen}>
      <div className="divide-y w-[30rem] divide-gray-600 px-3">
        <div className="px-4 py-4">
          <h1 className="text-2xl">Invite others</h1>
          <span className="text-gray-300 text-sm font-light">
            something good
          </span>
        </div>
        <div className="px-4 py-4 flex flex-col gap-2">
          <h2>Share this link via..</h2>
          <div className="flex gap-3">
            <button className="border w-fit p-[10px] rounded-full border-gray-500 text-green-300  hover:bg-green-700 hover:text-white">
              <AiOutlineWhatsApp size={22} />
            </button>
            <button className="border w-fit p-[10px] rounded-full border-gray-500 text-red-300  hover:bg-red-500 hover:text-white">
              <CgMail size={22} />
            </button>
          </div>
          <span className="pt-3">or copy link</span>
          <div className="border px-1 pl-[10px] py-1 w-full flex items-center gap-2 border-gray-500 rounded-md justify-between">
            <div className="flex items-center gap-2 w-full grow-0 whitespace-nowrap overflow-hidden overflow-ellipsis">
              <HiLink size={20} />
              <span className="whitespace-nowrap overflow-hidden overflow-ellipsis select-all">
                {link}
              </span>
            </div>
            <button
              className="bg-green-600 px-3 py-1 rounded-md hover:bg-green-800"
              onClick={() => {
                setCopy(true);
                navigator.clipboard.writeText(link);
              }}
            >
              {copy ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ShareModal;
