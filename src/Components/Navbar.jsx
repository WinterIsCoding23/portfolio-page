import { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants/index";

export default function Navbar() {
  // (de-)activate navigation-links
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // burger-menu
  // to change burger classes
  // const [burgerClass, setBurgerClass] = useState("burgerBar unclicked");
  // const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  // const updateMenu = () => {
  //   if (!isMenuClicked) {
  //     setBurgerClass("burgerBar clicked");
  //     setMenuClass("menu visible");
  //   } else {
  //     setBurgerClass("burgerBar unclicked");
  //     setMenuClass("menu hidden");
  //   }
  //   setIsMenuClicked(!isMenuClicked);
  // };

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 left-0 z-20 pl-5 pr-1">
      <div className="w-full flex justify-between ">
        <div className="pl-1 w-1/2 sm:w-full">
          <Link className="flex items-center gap-2" to="/">
            <img
              src="mdw-high-resolution-logo-color-on-transparent-background.png"
              alt="logo"
              className="w-10 h-10 sm:w-20 sm:h-20 rounded-lg object-contain"
            />
            <p className="text-[12px] sm:text-[18px] cursor-pointer">
              Markus&nbsp;Dominic&nbsp;Winter&nbsp;| <br /> Full&nbsp;Stack
              Developer
            </p>
          </Link>
        </div>
        <div className=" items-center pr-5 hidden sm:flex">
          {/* Links for larger screens */}
          <ul className="list-none flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-sky-500"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* -----------------New try------------------------------- */}
        <div className="sm:hidden">
          <div
            className={`custom-burgerMenu ${
              isMenuClicked ? "clicked" : "unclicked"
            }`}
            onClick={updateMenu}
          >
            <div
              className={`custom-burgerBar ${
                isMenuClicked ? "clicked" : "unclicked"
              }`}
            >
              1
            </div>
            <div
              className={`custom-burgerBar ${
                isMenuClicked ? "clicked" : "unclicked"
              }`}
            >
              2
            </div>
            <div
              className={`custom-burgerBar ${
                isMenuClicked ? "clicked" : "unclicked"
              }`}
            >
              3
            </div>
          </div>
        </div>
        <div
          className={`custom-menu ${isMenuClicked ? "visible" : "hidden"}`}
        ></div>
        {/* burger-menu: https://www.youtube.com/watch?v=gAGcjlJyKk0 */}
        {/* https://github.com/moses-netshitangani/burger-menu/blob/main/src/components/navbar.js */}
        {/* ------------------------------------- */}
        {/* <div className="sm:hidden"> */}
        {/* Burger menu for smaller screens */}
        {/* <div
            className="burgerMenu h-full w-full cursor-pointer bg-sky-300 mr-5"
            onClick={updateMenu}
          >
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
          </div> */}
        {/* Menu items for smaller screens */}
        {/* <ul className={`${menuClass} `}>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-sky-500"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div> */}
        {/* end burger-menu */}
        {/* ------------------------------------- */}
      </div>
    </nav>
  );
}
