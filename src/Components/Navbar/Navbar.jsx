import AboutLink from "../Links/AboutLink";
import ArticleLink from "../Links/ArticleLink";
import SubscribeButton from "../Buttons/SubscribeButton";
import "./navbar.css";
import logoStyles from "./logo.module.css";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

function Navbar() {
  const [toggleNav, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggleNav);
  };

  return (
    <nav>
      <ul className="desktop-navbar">
        <li>
          <a href="#hero">
            <span className={logoStyles.logoLetterD}>D</span>
            <span className={logoStyles.logoLetterZ}>Z</span>
          </a>
        </li>

        <li>
          <AboutLink name="About" />
          <ArticleLink />
        </li>

        <li>
          <SubscribeButton />
        </li>
      </ul>
      <ul className="hamburuger-nav">
        <li>
          <a href="#hero">
            <span className={logoStyles.logoLetterD}>D</span>
            <span className={logoStyles.logoLetterZ}>Z</span>
          </a>
        </li>
        <li className="hamburger-icon" onClick={handleClick}>
          <IoMdMenu />
        </li>
      </ul>
      {toggleNav ? (
        <section className="sidebar">
          <ul className="mobile-navbar">
            <li className="close-icon" onClick={handleClick}>
              X
            </li>
            <li>
              <AboutLink name="About" />
            </li>
            <li>
              <ArticleLink />
            </li>

            <li>
              <SubscribeButton />
            </li>
          </ul>
        </section>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Navbar;
