import React from "react";
import header from "../picuters/Header.jpg";

const Header = () => {
  // Define a JavaScript object with the background image style
  const headerStyle = {
    backgroundImage: `url(${header})`,
  };

  return (
    <div
      style={headerStyle}
      className="h-[750px] flex flex-col justify-center items-center lg:h-[460px] ">
      {/* Your content goes here */}
      <h1 className=" text-white text-3xl lg:text-6xl p-4 font-bold">
        Software & Business Solutions
      </h1>
      <h2 className="text-white text-lg lg:text-xl lg:w-[650px] text-center m-2 ">
        Deep expertise and a focus on usability make Ergo the first choice for
        businesses with a custom software development requirement for fast,
        affordable and sustainable applications that accelerate business
        advantage
      </h2>
      <div className=" flex flex-col lg:flex-row gap-4 m-8 justify-center items-center">
        <button className=" w-[320px] bg-transparent border text-white font-bold text-2xl rounded-full p-4 hover:bg-cyan-600 hover:scale-105 transition  ease-in-out duration-700">
          Contact us
        </button>
        <button className=" w-[320px] bg-[#f05a28] border text-black font-bold text-2xl rounded-full p-4 hover:bg-red-400 hover:scale-105 transition  ease-in-out duration-700">
          More Informations
        </button>
      </div>

      {/* Add more content as needed */}
    </div>
  );
};

export default Header;
