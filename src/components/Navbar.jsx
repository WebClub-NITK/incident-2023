import { useState } from "react";
import { close, menu } from "../assets";
import incitext from "../assets/incident-text.png";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="md:w-[80%] w-[90%]  flex justify-between items-center fixed z-50 p-2">
      {/* Logo */}
      <a href="#home">
        <img
          src={incitext}
          alt="Incident 2023"
          className=" md:h-[40px] h-[30px]"
        />
      </a>

      {/* List of links */}
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-[ARMBook]
            font-bold
            cursor-pointer
            text-[18px]
            
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
            text-primary hover:text-secondary`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* only for mobile devices, created separately */}
      <div className="md:hidden flex flex-1 justify-end items-center">
        {/* shows toggle icon based on its state */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          // correct way to change state using the prev
          // version of the same state using a callback function
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient
        absolute top-20 right-0 mx-4 my-2
        min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-[ARMBook]
                font-normal
                cursor-pointer
                text-[16px]
                ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
                text-primary`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
