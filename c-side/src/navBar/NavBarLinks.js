import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from "react-icons/io";

const NavBarLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link, index) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group ">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}>
              {link.name}
              <span className="text-md md:hidden inline">
                {heading === link.name ? (
                  <IoIosArrowDropupCircle />
                ) : (
                  <IoIosArrowDropdownCircle />
                )}
              </span>
              <span className="text-md md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <IoIosArrowDropdownCircle />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 mr-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className={`bg-white p-5 grid grid-cols-3 gap-3`}>
                    {link.sublinks.map((mysublinks) => (
                      <div className="border-b-2">
                        <h1 className="text-sm font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink
                          ? mysublinks.sublink.map((slink) => (
                              <li className="text-sm text-gray-600 my-2.5">
                                <Link
                                  to={slink.link ? slink.link : "/"}
                                  className="hover:text-primary">
                                  {slink.name}
                                </Link>
                              </li>
                            ))
                          : ""}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}>
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 text-sm md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5">
                    {slinks.Head}

                    <span className="text-sm md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? (
                        <IoIosArrowDropupCircle />
                      ) : (
                        <IoIosArrowDropdownCircle />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}>
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavBarLinks;
