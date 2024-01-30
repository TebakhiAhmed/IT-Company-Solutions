import React from "react";
import './Cards.css'
export const Cards = (item) => {
  return (
    <div className="card m-8 ">
      <div className="bg flex flex-col items-center p-2 gap-2">
        <img className="w-12 h-12" src={item.icons} alt="Software Development Icon"/>
        <div className="text-2xl mt-2 ">{item.title}</div>
        <div className="text-center mx-auto mt-6 w-[263px] lg:w-[250px] h-auto contentFont mobile:mt-[13px] mobile:w-[242px] iphone5s:!w-auto mobile:leading-[18px] tablet:mt-[13px] tablet:w-[350px] tablet:leading-[20px] laptop:leading-[18px] laptop:mt-[16px]">{item.content}</div>
        <div className="mt-4">{item.button}</div>
      </div>
      <div className="blob"></div>
    </div>
  );
};
