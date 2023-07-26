import React, { useState } from "react";
import languageToIcon from "./utils/languageToIcon";
import fetchData from "../api/fetchData";
import CreatePlaygroundModal from "../components/CreatePlaygroundModal/CreatePlaygroundModal";

const Dashboard = () => {
  const [playgrounds, setPlaygrounds] = useState([]);
  const [createModal, setCreateModal] = useState({
    open: false,
    language: "",
  });

  useState(async () => {
    const grounds = await fetchData("/room", "GET", null, false);
    setPlaygrounds(grounds);
    console.log(grounds);
  }, []);

  const createPlayground = async (language) => {
    setCreateModal({ open: true, language });
    console.log("create a playground with language", language);
  };

  return (
    <>
      <CreatePlaygroundModal
        isOpen={createModal.open}
        language={createModal.language}
        desc={
          "This will create a javascript playground, utilising node.js runtime."
        }
        onClose={() => {
          setCreateModal({ open: false });
        }}
      />
      <nav className="bg-black text-white h-14 w-screen border-b-[1px] border-solid border-gray-700"></nav>
      <main className="bg-[#161616] w-screen  px-64 py-12">
        <p className="text-white text-lg font-bold border-b-[1px] border-solid border-gray-700">
          CREATE PLAYGROUND
        </p>
        ​ ​
        <div className="mb-8 flex flex-col space-y-1">
          ​
          <div className="flex justify-between">
            <button
              onClick={() => createPlayground("cpp")}
              className="border-[1px] border-solid border-gray-700 flex p-3 rounded-lg space-x-3 items-center w-80 hover:border-blue-400"
            >
              ​
              <img
                src={languageToIcon["cpp"]}
                alt=""
                srcSet=""
                className=" h-7 rounded-lg"
              />
              ​
              <div className="text-white flex flex-col items-start justify-center">
                <p>C++</p>
                <p className="text-xs text-gray-400">C++ Playground</p>
              </div>
              ​
            </button>
            ​
            <button
              onClick={() => createPlayground("java")}
              className="border-[1px] border-solid border-gray-700 flex p-3 rounded-lg space-x-3 items-center w-80 hover:border-blue-400"
            >
              ​
              <img
                src={languageToIcon["java"]}
                alt=""
                srcSet=""
                className=" h-7 rounded-lg"
              />
              ​
              <div className="text-white flex flex-col items-start justify-center">
                <p>Java</p>
                <p className="text-xs text-gray-400">Java Playground</p>
              </div>
              ​
            </button>
            ​
            <button
              onClick={() => createPlayground("javascript")}
              className="border-[1px] border-solid border-gray-700 flex p-3 rounded-lg space-x-3 items-center w-80 hover:border-blue-400"
            >
              ​
              <img
                src={languageToIcon["javascript"]}
                alt=""
                srcSet=""
                className=" h-7 rounded-lg"
              />
              ​
              <div className="text-white flex flex-col items-start justify-center">
                <p>Javascript</p>
                <p className="text-xs text-gray-400">Javascript playground</p>
              </div>
            </button>
            ​
          </div>
          ​ ​ ​
          <div className="flex justify-between">
            <button
              onClick={() => createPlayground("go")}
              className="border-[1px] border-solid border-gray-700 flex p-3 rounded-lg space-x-3 items-center w-80 hover:border-blue-400"
            >
              ​
              <img
                src={languageToIcon["go"]}
                alt=""
                srcSet=""
                className=" h-7 rounded-lg"
              />
              ​
              <div className="text-white flex flex-col items-start justify-center">
                <p>Go</p>
                <p className="text-xs text-gray-400">Go playground</p>
              </div>
              ​
            </button>
            ​
            <button
              onClick={() => createPlayground("csharp")}
              className="border-[1px] border-solid border-gray-700 flex p-3 rounded-lg space-x-3 items-center w-80 hover:border-blue-400"
            >
              ​
              <img
                src={languageToIcon["csharp"]}
                alt=""
                srcSet=""
                className=" h-7 rounded-lg"
              />
              ​
              <div className="text-white flex flex-col items-start justify-center">
                <p>C#</p>
                <p className="text-xs text-gray-400">C# Playground</p>
              </div>
              ​
            </button>
            ​
            <button
              onClick={() => createPlayground("c")}
              className="border-[1px] border-solid border-gray-700 flex p-3 rounded-lg space-x-3 items-center w-80 hover:border-blue-400"
            >
              ​
              <img
                src={languageToIcon["c"]}
                alt=""
                srcSet=""
                className=" h-7 rounded-lg"
              />
              ​
              <div className="text-white flex flex-col items-start justify-center">
                <p>C</p>
                <p className="text-xs text-gray-400">C Playground</p>
              </div>
            </button>
            ​
          </div>
          ​ ​ ​ ​ ​
          <div className="flex justify-between">
            <button
              onClick={() => createPlayground("php")}
              className="border-[1px] border-solid border-gray-700 flex p-3 rounded-lg space-x-3 items-center w-80 hover:border-blue-400"
            >
              ​
              <img
                src={languageToIcon["php"]}
                alt=""
                srcSet=""
                className=" h-7 rounded-lg"
              />
              ​
              <div className="text-white flex flex-col items-start justify-center">
                <p>Php</p>
                <p className="text-xs text-gray-400">Php Playground</p>
              </div>
              ​
            </button>
            ​
            <button
              onClick={() => createPlayground("python")}
              className="border-[1px] border-solid border-gray-700 flex p-3 rounded-lg space-x-3 items-center w-80 hover:border-blue-400"
            >
              ​
              <img
                src={languageToIcon["python"]}
                alt=""
                srcSet=""
                className=" h-7 rounded-lg"
              />
              ​
              <div className="text-white flex flex-col items-start justify-center">
                <p>Python</p>
                <p className="text-xs text-gray-400">Python Playground</p>
              </div>
              ​
            </button>
            ​
            <button
              onClick={() => createPlayground("rust")}
              className="border-[1px] border-solid border-gray-700 flex p-3 rounded-lg space-x-3 items-center w-80 hover:border-blue-400"
            >
              ​
              <img
                src={languageToIcon["rust"]}
                alt=""
                srcSet=""
                className=" h-7 rounded-lg"
              />
              ​
              <div className="text-white flex flex-col items-start justify-center">
                <p>Rust</p>
                <p className="text-xs text-gray-400">Rust Playground</p>
              </div>
            </button>
            ​
          </div>
          ​ ​ ​
        </div>
        ​ ​
        <p className="text-white text-lg font-bold border-b-[1px] border-solid border-gray-700">
          MANAGE PLAYGROUND
        </p>
        ​
        <div className="container flex flex-col space-y-4">
          ​
          {playgrounds.map((playground) => (
            <div
              key={playground.roomId}
              className="text-white border-[1px] border-solid border-gray-700 flex px-5 py-3 rounded-lg justify-between items-center cursor-pointer hover:border-blue-400"
            >
              <div className=" flex space-x-3">
                <img
                  src={languageToIcon[playground.language]}
                  alt=""
                  className=" h-7 rounded-lg"
                />
                <p>{playground.name}</p>
                <div className="flex gap-4 text-zinc-400 font-light">
                  <span>|</span>
                  <span>{playground.language}</span>
                </div>
              </div>
              ​
              <div className="flex justify-center items-center space-x-5">
                <button className="text-gray-400 hover:text-red-400">
                  Delete
                </button>
              </div>
            </div>
          ))}
          ​
        </div>
      </main>
      ​
    </>
  );
};

export default Dashboard;
