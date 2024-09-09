import Article from "./Article/Article";
import SectionHeader from "../SectionHeader/SectionHeader";
import { articleInformation } from "../../data";
import drone1 from "../../assets/images/drone1.png";
import drone2 from "../../assets/images/drone2.png";
import drone4 from "../../assets/images/drone4.png";
import drone6 from "../../assets/images/drone6.png";

const images = [drone1, drone2, drone4, drone6];

function ArticleSection() {
  const articlesList = articleInformation.map((article, index) => (
    <li key={article.imageName}>
      <Article
        imageURL={images[index]}
        imageName={article.imageName}
        title={article.title}
      />
    </li>
  ));
  return (
    <section
      className="flex flex-col border-2 border-red-400 my-20 items-center"
      id="articles"
    >
      <SectionHeader name="LATEST ARTICLES" style="" />
      <ul className="grid gap-4 sm:grid-cols-2 sm:p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articlesList}
      </ul>
    </section>
  );
}

export default ArticleSection;
