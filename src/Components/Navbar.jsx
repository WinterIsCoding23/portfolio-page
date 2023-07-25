import { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants/index";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 left-0 z-20 pl-5 pr-1">
      <div className="w-full flex justify-between ">
        <div className="pl-1">
          <Link className="flex items-center gap-2" to="/">
            <img
              src="mdw-high-resolution-logo-color-on-transparent-background.png"
              alt="logo"
              className="w-20 h-20 rounded-lg object-contain"
            />
            <p className="text-[18px] cursor-pointer">
              Markus Dominic Winter | Full Stack Developer
            </p>
          </Link>
        </div>
        <div className="flex items-center pr-5">
          <ul className="list-none hidden sm:flex flex-row gap-10">
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
      </div>
    </nav>
  );
}
