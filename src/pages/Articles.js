import Article from '../Components/Article';
import styles from './Articles.module.css'
import { useState, useEffect } from 'react';
import Loading from '../Components/Loading';
 
const Articles = () => {
  const [articlesFromApi, setarticlesFromApi] = useState([]);
// onMount
useEffect(() => {
  fetch("https://localhost:7045/api/article").then((res) => res.json()).then((res) => setarticlesFromApi(res)  
  );
}, []);

const articlesRendered = articlesFromApi
.map((article, index) => (
  <Article
    key={index}
    headline={article.Title}
    author={article.AuthorName}
    articleContent={article.Content}
    src={process.env.PUBLIC_URL + article.ArticleImage}
    id={article.Id}
  />
));
      
      
    return(    
      <Loading DataLength={articlesFromApi.length}>
        <section className={styles.articles}>
        <div className={`${styles.container} ${styles.articles__container}` }>
        {articlesRendered}
        </div>
        </section>
      </Loading>

    ) ;
};


export default Articles