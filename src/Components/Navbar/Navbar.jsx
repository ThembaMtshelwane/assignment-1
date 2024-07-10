import AboutLink from '../Links/AboutLink'
import ArticleLink from '../Links/ArticleLink'
import SubscribeButton from '../Buttons/SubscribeButton'
import './navbar.css'
import logoStyles from './logo.module.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <span className={logoStyles.logoLetterD}>D</span>
          <span className={logoStyles.logoLetterZ}>Z</span>
        </li>

        <li>
          <ul className="linkList">
            <li>
              <AboutLink name="About" />
            </li>
            <li>
              <ArticleLink />
            </li>
          </ul>
        </li>

        <li>
          <SubscribeButton />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
