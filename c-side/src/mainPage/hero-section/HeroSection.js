import React from "react";
import { Cards } from "../../cards/Cards";
import { item1, item2, item3 } from "./Items";
const HeroSection = () => {

  return (
    // start of IT Outsourcing Services Components
    <div className="flex flex-col justify-center items-center mt-20 ">
      <h1 className="text-3xl lg:text-5xl font-semibold ">
        IT Outsourcing Services
      </h1>
      <div className="lg:w-[700px] ">
        <div className="text-md lg:text-xl lg:w-[650px] text-center m-2.5 ">
          <p>
            Our growth is accelerated by qualitysolutions to software testing,
            software development and digital BPO and.
          </p>
        </div>
      </div>

      <div className="lg:grid lg:grid-row-3 lg:grid-flow-col lg:gap-2">
        <div class=" row-end-4 row-span-6 ...">
          <Cards {...item1} />
        </div>

        <div class="row-end-3 row-span-6 ...">
          <Cards {...item2} />
        </div>
        <div class="row-end-4 row-span-6 ...">
          <Cards {...item3} />
        </div>
      </div>
    </div>
    // End of IT Outsourcing Services Components

  );
};

export default HeroSection;
