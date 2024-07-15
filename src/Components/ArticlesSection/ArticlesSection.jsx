import Article from "./Article/Article";
import SectionHeader from "../SectionHeader/SectionHeader";
import { articleInformation } from "../../data";

import "./articlesSection.css";
function ArticleSection() {
  const articlesList = articleInformation.map((article) => (
    <li key={article.imageName}>
      <Article
        imageURL={article.imageURL}
        imageName={article.imageName}
        title={article.title}
      />
    </li>
  ));
  return (
    <section className="articles-section" id="articles">
      <SectionHeader name="LATEST ARTICLES" style="sub-section-bar" />
      <ul className="articles-list">{articlesList}</ul>
    </section>
  );
}

export default ArticleSection;
