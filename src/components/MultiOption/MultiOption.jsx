import React from "react";

const MultiOption = ({ title, values, onOptionClick, active }) => {
  return (
    <div className="cursor-pointer flex items-center gap-2">
      <span>{title}</span>
      <div className="divide-zinc-500 flex rounded-md divide-x border-zinc-500 border bg-zinc-800">
        {values.map((value) => (
          <span
            key={value}
            className={`w-10 h-10 flex items-center justify-center ${
              active === value && "bg-zinc-600"
            }`}
            onClick={(e) => {
              onOptionClick(value);
            }}
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MultiOption;
