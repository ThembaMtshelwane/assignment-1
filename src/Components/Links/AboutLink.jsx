import styles from "./link.module.css";

function AboutLink({ name }) {
  return (
    <a href="#about" className={styles.links}>
      {name}
    </a>
  );
}

export default AboutLink;
