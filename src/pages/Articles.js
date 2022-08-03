import Article from "../Components/Article";
import styles from "./Articles.module.css";
import Loading from "../Components/Loading";
import {articles} from '../Data/articles'

const Articles = () => {
  const articlesRendered = articles.map((article, index) => (
    <Article
      key={index}
      headline={article.Title}
      author={article.AuthorName}
      articleContent={article.Content}
      src={article.ImageLInk}
      id={article._id}
    />
  ));

  return (
    <Loading DataLength={articles.length}>
      <section className={styles.articles}>
        <div className={`${styles.container} ${styles.articles__container}`}>
          {articlesRendered}
        </div>
      </section>
    </Loading>
  );
};

export default Articles;
