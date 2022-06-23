import Article from '../Components/Article';
import styles from './Articles.module.css'
import { useState, useEffect } from 'react';
 
const Articles = () => {
  const [articlesFromApi, setarticlesFromApi] = useState('');
// onMount
useEffect(() => {
  fetch("https://localhost:7045/api/article").then((res) => res.json()).then((res) => setarticlesFromApi(res)  
  );
}, []);

     const articlesRendered = [];
    for (let i = 0; i < articlesFromApi.length; i++) {
      articlesRendered.push(
        <Article
        key={i}
        headline={articlesFromApi[i].Title}
        author={articlesFromApi[i].AuthorName}
        articleContent={articlesFromApi[i].Content}
        src={process.env.PUBLIC_URL + articlesFromApi[i].ArticleImage}
        id={articlesFromApi[i].Id}
        />
      );
      }
      
      let loading = (
        !articlesFromApi &&
        <div className="loading">
        <img
          src={`${process.env.PUBLIC_URL}/images/loading.gif`}
          alt="Loading"
          />
        <h4>Loading</h4>
      </div>
          );
      
    return(    
      <>
      {loading ||
        <section className={styles.articles}>
        <div className={`${styles.container} ${styles.articles__container}` }>
        {articlesRendered}
        </div>
        </section>
      }   
      </>

    ) ;
};


export default Articles