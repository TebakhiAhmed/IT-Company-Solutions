import React from "react";

const Gbutton = ({bgColor, content}) => {
  return (
    <button className={`w-[170px] bg-[${bgColor}] text-white border text-md rounded-full p-4 hover:bg-red-400 hover:scale-105 transition  ease-in-out duration-700`}>
      {content}
    </button>
  );
};

export default Gbutton;
