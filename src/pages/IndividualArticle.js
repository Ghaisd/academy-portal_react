import styles from "./IndividualArticle.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../Components/Loading";

const IndividualArticle = () => {
  const { id } = useParams();
  const [articleFromApi, setarticleFromApi] = useState("");
  // onMount
  useEffect(() => {
    fetch(`https://localhost:7045/api/Article/${id}`)
      .then((res) => res.json())
      .then((res) => setarticleFromApi(res));
  }, [id]);

  
    return (
      <Loading DataLength={articleFromApi.length}>
      <div className={styles.container}>
        <img
          className={styles.background_img}
          src={[articleFromApi.ArticleImage]}
          alt="Article"
        />
        <h2 id={styles.headline}> {articleFromApi.Title}</h2>
        <div className={styles["profile-container"]}>
          <div className={styles.profile}>
            <div className={styles["img-container"]}>
              <img src={articleFromApi.AuthorImage} alt="Author" />
            </div>
            <div className={styles.text}>
              <h3>{articleFromApi.AuthorName}</h3>
              <p>May 18, 2022</p>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <p>{articleFromApi.Content}</p>
        </div>
      </div>
      </Loading>
    );
};

export default IndividualArticle;
