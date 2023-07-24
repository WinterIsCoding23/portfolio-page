import { useState, useEffect } from "react";

import { navLinks } from "../constants/index";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-201q">
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
    </nav>
  );
}
