import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [toggleNav, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggleNav);
  };

  return (
    <nav className="border-2 border-green-500 p-5 sm:p-8 text-2xl uppercase">
      <ul className="border-2 border-red-400 flex items-center justify-between sm:hidden">
        <li>
          <a href="#hero" className="text-2xl">
            <span className="">D</span>
            <span className="text-secondary">Z</span>
          </a>
        </li>
        <li className="hamburger-icon" onClick={handleClick}>
          <IoMdMenu />
        </li>
      </ul>
      <section
        className={`fixed w-full top-0 left-0 bg-secondary h-full border-2 border-yellow-400 sm:hidden transition-transform duration-500 ease-in-out ${
          toggleNav
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="border-red-400 border-2 h-[50vh] flex flex-col gap-10 p-2">
          <li className="menuItems" onClick={handleClick}>
            <IoClose className="scale-[2.5]" />
          </li>
          <li className="menuItems" onClick={handleClick}>
            <a href="#about">about</a>
          </li>
          <li className="menuItems" onClick={handleClick}>
            <a href="#articles">articles</a>
          </li>

          <li className="menuItems" onClick={handleClick}>
            <a href="#subscribe">subscribe</a>
          </li>
        </ul>
      </section>

      <ul className="hidden sm:grid sm:grid-cols-[1fr_2fr_1fr] md:grid-cols-3 items-center border-2 border-yellow-500 sm:w-[90%] max-w-[1560px] mx-auto">
        <li>
          <a href="#hero" className="text-4xl">
            <span className="">D</span>
            <span className="text-secondary">Z</span>
          </a>
        </li>

        <ul className="flex justify-between w-[90%] justify-self-center border-2 md:w-[100%] lg:max-w-[250px]">
          <li className="" onClick={handleClick}>
            <a href="#about">about</a>
          </li>
          <li className="" onClick={handleClick}>
            <a href="#articles">articles</a>
          </li>
        </ul>

        <li className="ml-auto" onClick={handleClick}>
          <a
            href="#subscribe"
            className="border-2 border-black px-4 md:px-8 lg:px-12 py-2"
          >
            subscribe
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
