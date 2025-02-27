import React, { useEffect, useRef } from "react";
import logo from "../assets/Beta House.svg";
import lady from "../assets/profile.svg";
import dropdown from "../assets/dropDown.svg";
import menu from "../assets/menu.svg";
import { Link } from "react-router";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className="backdrop-brightness-90 py-7 px-5 lg:px-14 fixed w-full  z-10">
        <div className="flex justify-between items-center">
          <img
            src={logo}
            alt="Beta House Logo"
            className="cursor-pointer w-[150px] lg:w-[215.66px]"
          />
          <ul className="hidden lg:flex gap-5 md:gap-10">
            <li className="cursor-pointer text-[16px] lg:text-[18px] font-light">
              Home
            </li>
            <li className="underline cursor-pointer text-[16px] lg:text-[18px] font-light">
              Properties
            </li>
            <li className="cursor-pointer text-[16px] lg:text-[18px] font-light">
              About Us
            </li>
            <li className="cursor-pointer text-[16px] lg:text-[18px] font-light">
              Blog
            </li>
            <li className="cursor-pointer text-[16px] lg:text-[18px] font-light">
              Contact Us
            </li>
          </ul>

          <div className="relative items-center gap-3 md:gap-5 hidden lg:flex">
            <img
              src={lady}
              alt="Profile"
              className="w-8 h-8 md:w-auto md:h-auto"
            />
            <h1 className="text-[16px] md:text-[26px]">Aisha Cucurella</h1>
            <img
              src={dropdown}
              alt="Dropdown"
              className="w-4 h-4 md:w-auto md:h-auto cursor-pointer"
              onClick={toggleDropdown}
            />
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md hover:bg-green-700">
                <Link to="/signin">
                  <ul className="py-1">
                    <li className="px-4 py-2 cursor-pointer ">Logout</li>
                  </ul>
                </Link>
              </div>
            )}
          </div>
          <img
            src={menu}
            alt="Menu"
            className="lg:hidden cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-100 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          ref={sidebarRef}
          className="fixed top-0 left-0 w-1/2 bg-white text-black h-full shadow-lg z-30"
        >
          <button
            className="absolute top-4 right-4"
            onClick={toggleSidebar}
          ></button>
          <div className="items-center gap-3 md:gap-5 flex lg:hidden p-5">
            <img
              src={lady}
              alt="Profile"
              className="w-8 h-8 md:w-auto md:h-auto"
            />
            <h1 className="text-[16px] md:text-[26px]">Aisha Cucurella</h1>
            <img
              src={dropdown}
              alt="Dropdown"
              className="w-4 h-4 md:w-auto md:h-auto"
            />
          </div>
          <ul className="flex flex-col gap-5 p-5 text-black mt-2">
            <li className="cursor-pointer text-[16px] font-light">Home</li>
            <li className="underline cursor-pointer text-[16px] font-light">
              Properties
            </li>
            <li className="cursor-pointer text-[16px] font-light">About Us</li>
            <li className="cursor-pointer text-[16px] font-light">Blog</li>
            <li className="cursor-pointer text-[16px] font-light">
              Contact Us
            </li>
            <hr />
            <Link to="/signin" className="bg-green p-2 rounded-lg">
              <button >Logout</button>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
