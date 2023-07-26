import React from "react";
import { AiFillWarning } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { BsCheckCircleFill } from "react-icons/bs";

const Toast = ({ type, message }) => {
  const state = {
    error: { color: "bg-red-500", Icon: RiErrorWarningLine },
    warning: { color: "bg-yellow-700", Icon: AiFillWarning },
    success: { color: "bg-green-600", Icon: BsCheckCircleFill },
  };

  const Icon = state[type].Icon;

  return (
    <div
      className={`flex ${state[type].color} items-center gap-4 w-80 py-3 pl-5 rounded-xl text-white h-fit absolute right-20 bottom-20`}
    >
      <Icon className="shrink-0" size={26} />
      <span>{message}</span>
    </div>
  );
};

export default Toast;
