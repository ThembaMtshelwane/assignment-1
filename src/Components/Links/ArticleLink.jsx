import styles from "./link.module.css";

function ArticleLink() {
  return (
    <a href="#articles" className={styles.links}>
      Articles
    </a>
  );
}

export default ArticleLink;
