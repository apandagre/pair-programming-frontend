import React, { useState } from "react";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import fetchData from "../api/fetchData";
import Toast from "../components/Toast/Toast";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const submitSignup = async (e) => {
    e.preventDefault();
    console.log("here");
    const data = await fetchData(
      "/register",
      "POST",
      JSON.stringify({ name, email, password }),
      true
    );
    console.log(data);
    if (data.token) {
      console.log("navigating!!");
      navigate("/login");
    } else setError(data.message);
    // else {

    // }
  };

  return (
    <div className="conatiner flex text-white">
      {error && <Toast message={error} type="error" />}
      <div className="left pt-8 px-44 bg-[#161616] w-1/2 h-screen">
        <img src="Images/circle.png" alt="" className="mb-10 w-6" />
        <div className="para space-y-3">
          <p className="text-center font-bold text-3xl">🤝 Register with us</p>
          <p className="text-center text-gray-500 text-lg">
            You own digital compagin
          </p>
        </div>
        <div className="button flex justify-center gap-2 my-7">
          <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-600 flex justify-center items-center p-0.5">
            <button className="flex items-center text-base bg-zinc-800 h-full cursor-not-allowed">
              {/* <img src="Images/google-logo.png" className="h-7 ml-2" /> */}
              <AiOutlineGoogle size={22} className="ml-2" />
              <p className="mx-2">Register with Google</p>
            </button>
          </div>

          <div className="h-16 bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-600 flex justify-center items-center p-0.5">
            <button className="flex items-center text-base bg-zinc-800 h-full cursor-not-allowed">
              {/* <img src="Images/git.png" className="h-7 ml-2 rounded-lg" /> */}
              <AiOutlineGithub size={22} className="ml-2" />
              <p className="mx-2">Register with Github</p>
            </button>
          </div>
        </div>
        <div className="text-center text-gray-500">--- OR ---</div>
        {/* <!-- Form --> */}
        <form onSubmit={submitSignup} className="flex flex-col my-3">
          <input
            type="text"
            placeholder="Name"
            className="text-gray-300 bg-zinc-800 p-5 rounded-lg my-1 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="text-gray-300 bg-zinc-800  p-5 rounded-lg my-1 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="text-gray-300 bg-zinc-800  p-5 rounded-lg my-1 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="submit"
            value="Start your journey"
            className="h-16 font-bold text-lg p-4 rounded-lg my-8 bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-600"
          />
        </form>
        <div className="flex justify-center space-x-2 items-center">
          <p className="text-gray-500 text-lg ">Already have an account?</p>
          <Link to="/login" className="font-bold text-md underline">
            Login
          </Link>
        </div>
      </div>

      {/* <!-- Right side -->
          <!-- <div className="right bg-blue-600 w-1/2 h-screen">
  ​
          </div> --> */}

      <div className="bg-[#161616] w-1/2 h-screen flex justify-center items-center relative">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 w-96 h-96 absolute rounded-full blur-3xl"></div>
        <img src="./set2.png" alt="" className="w-96 rounded-full z-10" />
      </div>
    </div>
  );
};

export default Signup;
