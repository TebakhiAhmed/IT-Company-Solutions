import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button"
import NavBarLinks from './NavBarLinks'
import { CiMenuBurger } from "react-icons/ci";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">

      <div className="flex items-center font-medium font-serif text-md font-extrabold lg:font-normal lg:text-xl justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <div alt="logo" className="md:cursor-pointer h-9">LOGO</div>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
          <CiMenuBurger name={`${open ? "close" : "menu"}`}></CiMenuBurger>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              About
            </Link>
          </li>
          <NavBarLinks />
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              About
            </Link>
          </li>
          <NavBarLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;