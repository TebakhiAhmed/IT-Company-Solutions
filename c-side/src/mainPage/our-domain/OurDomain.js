import React, { useState } from "react";
import { domainsLink } from "./domainsLink";
import Gbutton from "../../globalButton/Gbutton";
const OurDomain = () => {
  const [clickedItemIndex, setClickedItemIndex] = useState(0);
  console.log(clickedItemIndex)

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20  ">
        <h1 className="text-3xl lg:text-5xl font-semibold ">Our Domain's </h1>
        <div className="lg:w-[700px] ">
          <div className="text-md lg:text-xl lg:w-[650px] text-center m-2.5 ">
            <p>
              Along with cutting-edge IT outsourcing solutions, our extensive
              expertise in various domains will help you reach greater goals in
              a shorter time.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:flex gap-4">
          {domainsLink.map((item, index) => {
            return (
              <div key={index} className="flex flex-col cursor-pointer">
                <div
                  onClick={() => {
                    setClickedItemIndex(index);
                  }}
                  className={`flex flex-col justify-center items-center gap-4 border-2 rounded-[10px]  w-[10rem] h-[10rem] ${
                    clickedItemIndex === index ? "bg-sky-100 scale-105" : ""
                  } transition-all duration-700 ease-in-out relative`}>
                  <img
                    className="w-[4rem] h-[4rem]"
                    src={item.icon}
                    alt="eCommerce Icons"
                  />
                  <div>{item.name}</div>
                </div>
                <div className={`flex justify-center items-center mb-4`}>
                  <div
                    className={` ${
                      clickedItemIndex === index
                        ? "w-0 h-0 border-l-[35px] border-l-transparent border-t-[38px] border-t-sky-100 border-r-[35px] border-r-transparent"
                        : " w-0 h-0 border-l-[0px] border-l-transparent border-t-[0px] border-t-sky-100 border-r-[0px] border-r-transparent"
                    } transition-all duration-700 ease-in-out relative   `}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex lg:flex justify-center items-center">
        <div className=" w[25rem] h[80rem] items-center lg:w-[80rem] lg:h-[20rem] border-2 m-4 rounded-[2.5rem]">
          <div className="m-8 lg:m-2 block lg:flex items-center">
             <img className="lg:w-[26rem] lg:h-[18.7rem] border rounded-[2.5rem]" src={domainsLink[clickedItemIndex].picture} alt="ecommerce" />
             <div className="flex flex-col gap-8">
              <h1 className="pl-2 pt-2 text-4xl"> {domainsLink[clickedItemIndex].name} </h1>
              <p className="pl-2 lg:w-[45rem]">{domainsLink[clickedItemIndex].desc}</p>
              <div className="pl-2">
                <Gbutton bgColor="#f05a28" content="View Details..."/>
              </div>
             </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default OurDomain;
