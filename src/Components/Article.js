import styles from "./Article.module.css";
import CustomLink from "./UI/CustomLink";

const Article = ({ src, headline, author, articleContent, id }) => {
  return (
    <article className={styles.article}>
      <div className={styles.article__Image}>
        <img src={src} alt="article" />
      </div>
      <div className={styles.article__info}>
        <h3>{headline}</h3>
        <small>Skrevet av: {author}</small>
        <p>{articleContent}</p>
      </div>
      <CustomLink
        to={`/Articles/${id}`}
        className={`btn-danger ${styles.btn_article}`}
      >
        Les Mer
      </CustomLink>
    </article>
  );
};

export default Article;
