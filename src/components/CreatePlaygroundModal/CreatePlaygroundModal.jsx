import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import languageToIcon from "../../pages/utils/languageToIcon";
import fetchData from "../../api/fetchData";
import { useNavigate } from "react-router-dom";
import Toast from "../Toast/Toast";
import { RiErrorWarningLine } from "react-icons/ri";

const CreatePlaygroundModal = ({ onClose, isOpen, language, desc }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const createPlayground = async (e) => {
    e.preventDefault();
    const data = await fetchData(
      "/room",
      "POST",
      JSON.stringify({ name, language }),
      false
    );
    if (data.roomId) navigate(`/playground?room=${data.name}`);
    else setError(data.message);
  };

  useEffect(() => {
    setError("");
  }, [language, name]);

  return (
    <>
      <Modal onClose={onClose} open={isOpen}>
        {error && (
          <div className="flex bg-red-500 items-center gap-4 w-80 py-3 pl-5 rounded-xl text-white h-fit absolute left-20 -top-20">
            <RiErrorWarningLine className="shrink-0" size={26} />
            <span>{error}</span>
          </div>
        )}
        <div className="divide-y w-[30rem] divide-gray-600 px-8 py-4 flex flex-col gap-4">
          <div>
            <h1 className="text-2xl">Create a playground</h1>
            <span className="text-gray-300 text-sm font-light">{desc}</span>
          </div>
          <div className="flex gap-4 pt-6">
            <img src={languageToIcon[language]} className="w-28" />
            <div className="flex flex-col gap-2 flex-1">
              <h2 className="">Playground title</h2>
              <form className="w-full flex flex-col gap-2">
                <input
                  type="text"
                  className="bg-zinc-600 border border-zinc-500 rounded-md px-4 py-1 outline-none focus:border-zinc-300"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <button
                  className="bg-zinc-900 self-center rounded-md px-2 py-1 text-sm font-semibold w-fit mt-1"
                  onClick={createPlayground}
                >
                  + Create Playground
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CreatePlaygroundModal;
