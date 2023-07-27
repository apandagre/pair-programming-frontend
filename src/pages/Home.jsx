import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const user = localStorage.getItem("user");

  return (
    <>
      <nav className="bg-[#161616] h-14 flex items-center px-4 py-2 justify-between">
        <button className="flex space-x-2 items-center justify-center">
          <img src="./panda.png" alt="" className="h-10" />
          <img src="./Samarkan.png" alt="" className="h-10" />
        </button>

        <div className="flex justify-center items-center space-x-3">
          <button className="text-white px-4 py-1.5 rounded border border-1px border-[#161616] hover:bg-gray-800 hover:border-gray-600">
            Star us on Github
          </button>
          {user ? (
            <Link
              to="/dashboard"
              className="bg-white px-4 py-1.5 rounded hover:bg-gray-300 text-gray-800"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/signup"
                className="bg-white px-4 py-1.5 rounded hover:bg-gray-300 text-gray-800"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="text-white px-4 py-1.5 rounded border border-1px border-[#161616] hover:bg-gray-800 hover:border-gray-600"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </nav>

      <div className="main1 flex">
        <div className="bg-[#161616] w-1/2 flex flex-col p-28 space-y-5">
          <div className="text-white text-4xl leading-normal">
            A pair programming platform that helps you
          </div>

          <div className="boxes flex space-x-4 items-center">
            <div className="bg-[#10243e] text-[#369eff] text-3xl px-3 py-3 rounded-md flex justify-center items-center space-x-2">
              <img src="./develop.png" alt="" className="h-6" />
              <p>develop</p>
            </div>

            <div className="bg-[#391a03] text-[#ff802b] text-3xl px-3 py-3 rounded-md flex justify-center items-center space-x-2">
              <img src="./review.png" alt="" className="h-6" />
              <p>review</p>
            </div>

            <div className="text-4xl py-1 text-white">&</div>

            <div className="bg-[#0f291e] text-[#3cb179] text-3xl px-3 py-3 rounded-md flex justify-center items-center space-x-2">
              <img src="./deployment.png" alt="" className="h-6" />
              <p>compile</p>
            </div>
          </div>

          <p className="text-gray-400 text-lg">
            {`Login -> Create a room -> Invite -> Code (It's that easy)`}
          </p>
          <br />
          <br />

          <button className="bg-white rounded-lg p-4 hover:bg-gray-300 flex space-x-2 items-center w-fit">
            <p className="font-medium text-lg text-black">Sign Up for Free</p>
            <img src="./right-arrow.png" alt="" className="h-6" />
          </button>
        </div>

        <div className="bg-[#161616] w-1/2 text-white flex relative">
          <div className="bg-[#10243e] w-1/2 h-3/4 rounded-3xl absolute top-20 left-16"></div>

          <img
            src="./editor-ss.png"
            alt=""
            srcSet=""
            className="z-10 absolute w-3/4 top-36 left-24 rounded-lg border border-1px border-gray-700"
          />
        </div>
      </div>

      <div className="bg-[#1a1d1e] py-28 px-96">
        <div className="px-28 flex flex-col space-y-6 leading-loose">
          <div>
            <span className="text-white text-xl">
              Introducing our innovative pair programming platform!
            </span>
            <span className="text-gray-400 text-xl">
              Developers unite in shared rooms, collaborating effortlessly by
              coding together in real-time.
            </span>
          </div>

          <div>
            <span className="text-white text-xl">
              With support for all major programming languages, our editor
              empowers users with syntax highlighting and compilation
              capabilities.
            </span>
            <span className="text-gray-400 text-xl">
              Personalization is a breeze as room members can configure their
              editor settings, adjusting tab size, font size, word wrap, and
              more to suit individual preferences.
            </span>
          </div>

          <div>
            <span className="text-white text-xl">
              Plus, users can conveniently save their code, ensuring their hard
              work and progress are never lost. Say goodbye to coding in
              isolation and embrace the power of collective programming.
            </span>
            <span className="font-extrabold text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-300">
              We’ll take care of the compilation so you and your team can focus
              on writing the world's best code.
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[url('./bg.png')] py-20">
        <div className="flex flex-col justify-center items-center p-2 space-y-6">
          <div className="text-white text-2xl font-semibold">
            An open-source platform built for code & collaboration
          </div>

          <div className="flex space-x-20">
            <div className="flex flex-col justify-center items-center p-3">
              <div className="bg-[#151718] p-2 flex justify-center items-center border border-1px border-gray-600 my-3 rounded-md">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/spring/spring-original.svg"
                  alt=""
                  className="w-8"
                />
              </div>
              <div className="text-white text-2xl font-medium">Springboot</div>
              <div className="text-gray-500 text-center">backend</div>
            </div>

            <div className="flex flex-col justify-center items-center p-3">
              <div className="bg-[#151718] p-2 flex justify-center items-center border border-1px border-gray-600 my-3 rounded-md">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg"
                  alt=""
                  className="w-8"
                />
              </div>
              <div className="text-white text-2xl font-medium">React</div>
              <div className="text-gray-500 text-center">frontend</div>
            </div>

            <div className="flex flex-col justify-center items-center p-3">
              <div className="bg-[#151718] p-2 flex justify-center items-center border border-1px border-gray-600 my-3 rounded-md">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/postgresql/postgresql-original.svg"
                  alt=""
                  className="w-8"
                />
              </div>
              <div className="text-white text-2xl font-medium">Postgresql</div>
              <div className="text-gray-500 text-center">database</div>
            </div>

            <div className="flex flex-col justify-center items-center p-3">
              <div className="bg-[#151718] p-2 flex justify-center items-center border border-1px border-gray-600 my-3 rounded-md">
                <img src="./webrtc.png" alt="" className="w-8" />
              </div>
              <div className="text-white text-2xl font-medium">WebRTC</div>
              <div className="text-gray-500 text-center">
                communication protocol
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('./bg2.png')] py-20">
        <div className="p-3 flex flex-col justify-center items-center space-y-12">
          <div className="text-white text-2xl font-semibold">
            Future scope of the project
          </div>

          <div className="grid grid-cols-3 gap-7">
            <div className="p-4 bg-[#202425] border border-1px border-gray-600 rounded-lg h-56 w-56 flex flex-col justify-center items-start space-y-3">
              <img src="./open-box.png" alt="" className="w-8" />
              <div className="text-white text-lg font-medium">Cloud IDE</div>
              <div className="text-gray-400">
                This would not just be a compilation platform, but a full-blown
                IDE.
              </div>
            </div>
            <div className="p-4 bg-[#202425] border border-1px border-gray-600 rounded-lg h-56 w-56 flex flex-col justify-center items-start space-y-3">
              <img src="./open-box.png" alt="" className="w-8" />
              <div className="text-white text-lg font-medium">Intellisense</div>
              <div className="text-gray-400">
                Intellisense will be provided for all the major programming
                languages.
              </div>
            </div>
            <div className="p-4 bg-[#202425] border border-1px border-gray-600 rounded-lg h-56 w-56 flex flex-col justify-center items-start space-y-3">
              <img src="./open-box.png" alt="" className="w-8" />
              <div className="text-white text-lg font-medium">
                Multi-file compilation
              </div>
              <div className="text-gray-400">
                You'll be able to compile multiple files at once.
              </div>
            </div>

            {/* Integration with git */}
            {/* Dark mode switching */}
            {/* Audio chat */}

            <div className="p-4 bg-[#202425] border border-1px border-gray-600 rounded-lg h-56 w-56 flex flex-col justify-center items-start space-y-3">
              <img src="./open-box.png" alt="" className="w-8" />
              <div className="text-white text-lg font-medium">
                Git integration
              </div>
              <div className="text-gray-400">
                Who doesn't want a 1-click push to github button.
              </div>
            </div>
            <div className="p-4 bg-[#202425] border border-1px border-gray-600 rounded-lg h-56 w-56 flex flex-col justify-center items-start space-y-3">
              <img src="./open-box.png" alt="" className="w-8" />
              <div className="text-white text-lg font-medium">Audio chat</div>
              <div className="text-gray-400">
                You'll be able to audio chat with other room members.
              </div>
            </div>
            <div className="p-4 bg-[#202425] border border-1px border-gray-600 rounded-lg h-56 w-56 flex flex-col justify-center items-start space-y-3">
              <img src="./open-box.png" alt="" className="w-8" />
              <div className="text-white text-lg font-medium">Theme</div>
              <div className="text-gray-400">
                Switch between dark mode & light mode
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1a1d1e] py-28 px-96">
        <div className="px-28 flex flex-col justify-center items-center space-y-10">
          <div className="text-white text-3xl font-semibold">Tech stack..</div>
          <div className="text-zinc-200 leading-8 text-xl text-center">
            <span className="hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-300">
              Our pair programming platform enables real-time code
              collaboration.
            </span>
            <span className="hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-300">
              Developers can share ideas and solve problems together
              effortlessly.
            </span>
            <span className="hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-300">
              It uses Spring Boot backend, React frontend, and JWT
              authentication.
            </span>
            <span className="hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-300">
              CRDT protocol ensures conflict-free code editing for smooth
              teamwork.
            </span>
            <span className="hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-300">
              Real-time synchronization fosters instant feedback and faster
              development.
            </span>
            <span className="hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-300">
              Monaco editor provides syntax highlighting and customizable
              settings.
            </span>
            <span className="hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-green-300">
              PostgreSQL ensures reliable data storage and protection.
            </span>
          </div>

          <button className="bg-white px-5 py-2 rounded hover:bg-gray-300 font-normal text-gray-800">
            Get Started
          </button>
        </div>
      </div>

      <div className="flex px-32 py-8">
        <div className="bg-[#161616] w-2/5 flex flex-col space-y-5 items-start pr-20">
          <div className="text-white text-4xl leading-normal font-medium">
            Try it for yourself
          </div>

          <p className="text-gray-400 text-lg">
            Fast animations. Genuine native components. Edit in your browser and
            preview on your device in seconds.
          </p>
          <br />
          <br />
        </div>

        <div className="bg-[#161616] flex-1 flex relative justify-center items-center pl-16">
          {/* <img
            src="./laptop.png"
            alt=""
            srcSet=""
            className="absolute w-3/4"
          /> */}
          {/* <img
            src="./editor-ss.png"
            alt=""
            className="absolute z-10 w-[353px] h-[201px] mt-12"
          /> */}
          <img
            src="./editor-ss.png"
            alt=""
            className="border border-zinc-600 rounded-xl h-96"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
