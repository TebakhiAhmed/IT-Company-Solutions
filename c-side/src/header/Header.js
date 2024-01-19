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
      className="flex flex-col h-[460px] justify-center items-center">
      {/* Your content goes here */}
      <h1 className="text-white text-6xl p-4 font-bold">
        Software & Business Solutions
      </h1>
      <h2 className="text-white text-xl w-[650px] text-center m-2 ">
        Deep expertise and a focus on usability make Ergo the first choice for
        businesses with a custom software development requirement for fast,
        affordable and sustainable applications that accelerate business
        advantage
      </h2>
      <div className="flex gap-4 m-8">
        <button className="bg-cyan-500 border text-white font-bold text-2xl rounded-full p-4 w-44 hover:bg-cyan-600">Contact us</button>
        <button className="bg-red-300 border text-black font-bold text-2xl rounded-full p-4 hover:bg-red-700">More Informations</button>
      </div>

      {/* Add more content as needed */}
    </div>
  );
};

export default Header;
