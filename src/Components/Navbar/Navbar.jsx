import AboutLink from '../Links/AboutLink'
import ArticleLink from '../Links/ArticleLink'
// import styles from './navbar.module.css'


function Navbar() {
  return (
    <nav>
      <ul>
        <li>Logo</li >
        
        <li><AboutLink name='About'/></li>
        <li><ArticleLink/></li>
             
        <li>Subscribe</li>
      </ul>
    </nav>
  )
}

export default Navbar