import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [toggleNav, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggleNav);
  };

  return (
    <nav className=" p-5 sm:p-8  uppercase absolute z-10 w-full">
      <ul className=" flex items-center justify-between sm:hidden">
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

      <ul className="hidden sm:grid sm:grid-cols-[1fr_2fr_1fr] md:grid-cols-3 items-center sm:w-[90%] max-w-[1560px] mx-auto">
        <li>
          <a href="#hero" className="text-4xl">
            <span className="">D</span>
            <span className="text-secondary">Z</span>
          </a>
        </li>

        <ul className="flex justify-between w-[90%] justify-self-center  md:w-[100%] lg:max-w-[250px]">
          <li className="" onClick={handleClick}>
            <a href="#about" className="text-2xl">
              about
            </a>
          </li>
          <li className="" onClick={handleClick}>
            <a href="#articles" className="text-2xl">
              articles
            </a>
          </li>
        </ul>

        <li className="ml-auto" onClick={handleClick}>
          <a
            href="#subscribe"
            className="border-2 border-black px-4 md:px-8 lg:px-12 py-2  text-2xl"
          >
            subscribe
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
