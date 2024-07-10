import AboutLink from '../Links/AboutLink'
import ArticleLink from '../Links/ArticleLink'
// import styles from './navbar.module.css'


function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <span className={styles.logoLetterD}>D</span>
          <span className={styles.logoLetterZ}>Z</span>
        </li >
        
        <li><AboutLink name='About'/></li>
        <li><ArticleLink/></li>
             
        <li>Subscribe</li>
      </ul>
    </nav>
  )
}

export default Navbar