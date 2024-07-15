import AboutLink from "../Links/AboutLink";
import ArticleLink from "../Links/ArticleLink";
import SubscribeButton from "../Buttons/SubscribeButton";
import "./navbar.css";
import logoStyles from "./logo.module.css";

function Navbar() {
  return (
    <nav>
      <ul>
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
    </nav>
  );
}

export default Navbar;
