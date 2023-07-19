import React from "react";
import { GoTriangleDown } from "react-icons/go";

const LanguageDropdown = () => {
  return (
    <button
      onClick={() => {}}
      className="my-1 flex items-center gap-2 rounded-lg bg-[#161616] py-2 px-4 text-sm text-white ring-1 ring-gray-600 hover:bg-white hover:text-[#161616]"
    >
      <span className="text-lg">Python</span>
      <GoTriangleDown size={20} />
        {/* users can change language, maybe later */}
    </button>
  );
};

export default LanguageDropdown;
