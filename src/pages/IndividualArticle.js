import styles from "./IndividualArticle.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../Components/UI/Loading";
import {articles} from "../Data/articles";


const IndividualArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  // onMount
  useEffect(() => {
      const individualArticle = articles.find(x => x._id === +id);
      setArticle(individualArticle)    
  }, [id,article.Title, setArticle]);
  return (
    <Loading DataLength={article}>
      <div className={styles.container}>
        <img
          className={styles.background_img}
          src={[article.ImageLInk]}
          alt="Article"
        />
        <h2 id={styles.headline}> {article.Title}</h2>
        <div className={styles["profile-container"]}>
          <div className={styles.profile}>
            <div className={styles["img-container"]}>
              <img src={article.AuthorImageLink} alt="Author" />
            </div>
            <div className={styles.text}>
              <h3>{article.AuthorName}</h3>
              <p>May 18, 2022</p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <p>{article.Content}</p>
        </div>
      </div>
    </Loading>
  );
};

export default IndividualArticle;
