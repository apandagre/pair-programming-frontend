import React, { useState } from "react";
import { AiOutlineGoogle, AiOutlineGithub } from "react-icons/ai";
import fetchData from "../api/fetchData";
import Toast from "../components/Toast/Toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitLogin = async (e) => {
    e.preventDefault();
    const data = await fetchData(
      "/login",
      "POST",
      JSON.stringify({ email, password }),
      true
    );
    console.log(data);
    if (!data.token) setError(data.message);
    else {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    }
  };

  return (
    <div className="conatiner flex text-white">
      {error && <Toast message={error} type="error" />}
      <div className="left pt-8 px-44 bg-[#161616] w-1/2 h-screen">
        <img src="Images/circle.png" alt="" className="mb-10 w-6" />
        <div className="para space-y-3">
          <p className="text-center font-bold text-3xl">
            🎉 Login to Your Account
          </p>
          <p className="text-center text-gray-500 text-lg">
            You own digital compagin
          </p>
        </div>
        <div className="button flex justify-center gap-5 my-7">
          <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-600 flex justify-center items-center p-0.5">
            <button className="flex items-center text-base bg-zinc-800 h-full cursor-not-allowed">
              {/* <img src="Images/google-logo.png" className="h-7 ml-2" /> */}
              <AiOutlineGoogle size={22} className="ml-2" />
              <p className="mx-2">Login with Google</p>
            </button>
          </div>

          <div className="h-16 bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-600 flex justify-center items-center p-0.5">
            <button className="flex items-center text-base bg-zinc-800 h-full cursor-not-allowed">
              {/* <img src="Images/git.png" className="h-7 ml-2 rounded-lg" /> */}
              <AiOutlineGithub size={22} className="ml-2" />
              <p className="mx-2">Login with Github</p>
            </button>
          </div>
        </div>
        <div className="text-center text-gray-500">--- OR ---</div>
        {/* <!-- Form --> */}
        <form onSubmit={submitLogin} className="flex flex-col my-3">
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
          <div className="flex items-center justify-between my-4">
            <div className="flex items-center">
              <input type="radio" name="" id="r1" className="h-5 w-5" />
              <label htmlFor="r1" className="text-gray-500 text-lg ml-2">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-gray-500 text-lg justify-self-end">
              Forgot Password?
            </a>
          </div>

          <input
            type="submit"
            value="Login to Your Account"
            className="h-16 font-bold text-lg p-4 rounded-lg my-5 bg-gradient-to-r from-teal-400 via-teal-500 to-cyan-600"
          />
        </form>
        <div className="flex justify-center space-x-2 items-center">
          <p className="text-gray-500 text-lg ">Not a member yet?</p>
          <Link to="/signup" className="font-bold text-md underline">
            Register Now
          </Link>
        </div>
      </div>

      {/* <!-- Right side -->
            <!-- <div className="right bg-blue-600 w-1/2 h-screen">
    ​
            </div> --> */}
    </div>
  );
};

export default Login;
