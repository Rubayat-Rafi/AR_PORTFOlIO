import React from "react";
import logo from "../assets/logo/ar-logo-png.png";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const navLinks = (
    <>
      <li>
        <a href="#home" smooth={true} duration={500}>
          Home
        </a>
      </li>
      <li>
        <a href="#about" smooth={true} duration={500}>
          About
        </a>
      </li>
      <li>
        <a href="#skills" smooth={true} duration={500}>
          Skills
        </a>
      </li>
      <li>
        <a href="#projects" smooth={true} duration={500}>
          Projects
        </a>
      </li>
      <li>
        <a href="#contact" smooth={true} duration={500}>
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className=" sticky top-0 left-0 right-0 z-50 bg-bgColor">
      <div className="navbar justify-between mx-auto w-11/12 max-w-[1440px]">
        <div className="">
          {/* logo  */}
          <a href="/root">
            <img
              src={logo}
              alt="logo icon"
              className="h-6 md:h-8 transition-transform duration-300 "
            />
          </a>
        </div>
        <div className="">
          {/* menu navLinks  for small device  */}
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          {/* resume button  */}
          <a className="font-medium text-xs md:text-sm  bg-bgMainColor hover:bg-hover text-textColor py-2 px-4 rounded-full cursor-pointer transition-colors duration-300 hover:bg-transparent hover:text-mainColor border border-mainColor hover:shadow-custom-glow">
            Download Resume
          </a>

          {/* menu icon  */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" ml-4 lg:hidden text-2xl"
            >
              <FiMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-secondbBgColor right-0  rounded-box z-[1] mt-3 w-36 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
