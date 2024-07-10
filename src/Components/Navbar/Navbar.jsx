import AboutLink from '../Links/AboutLink'
import ArticleLink from '../Links/ArticleLink'
// import styles from './navbar.module.css'
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
          <AboutLink name="About" />
        </li>
        <li>
          <ArticleLink />
        </li>

        <li>Subscribe</li>
      </ul>
    </nav>
  )
}

export default Navbar
