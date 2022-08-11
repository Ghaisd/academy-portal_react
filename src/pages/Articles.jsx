import Article from '../Components/Article';
import styles from './Articles.module.css';
import Loading from '../Components/UI/Loading';
import articles from '../Data/articles';

const Articles = () => {
  const articlesRendered = articles.map((article) => (
    <Article
      key={article.id}
      id={article.id}
      headline={article.Title}
      author={article.AuthorName}
      articleContent={article.Content}
      src={article.ImageLInk}
    />
  ));

  return (
    <Loading DataLength={articles.length}>
      <section className={styles.articles}>
        <div className={styles.articles__container}>
          {articlesRendered}
        </div>
      </section>
    </Loading>
  );
};

export default Articles;
