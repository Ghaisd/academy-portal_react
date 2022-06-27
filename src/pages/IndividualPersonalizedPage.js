import styles from "./IndividualPersonalizedPage.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../Components/Loading";
const IndividualPersonalizedPage = () => {
  const { id } = useParams();
  const [studentFromApi, setStudentFromApi] = useState("");
  // onMount
  useEffect(() => {
    fetch(`https://localhost:7045/api/name/${id}`)
      .then((res) => res.json())
      .then((res) => setStudentFromApi(res));

  }, [id]);
  
  return (
    <Loading DataLength = {studentFromApi.length}>
    
      <section className={styles.home} id="home">
      <div className={styles["home-text"]}>
      <h3>Hallo, jeg er</h3>
      <br />
      <h1>{`${studentFromApi.Name} ${studentFromApi.LastName}`}</h1>
      <br />
      <h5>Student at Ikomm Academy</h5>
        <p>{studentFromApi.ShortInfo}</p>
        <div className={styles.social}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin"></i>
          </a>
          <a href={studentFromApi.Github} target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>
        </div>
        <a href="/#" className={styles.btn}>
          Last ned CV
        </a>
      </div>
      <div className={styles["home-img"]}>
        <img
          className={styles["profile-img"]}
          src={studentFromApi.ProfileImage}
          alt="ProfilePic"
          />
      </div>
    </section>
    </Loading>
  );
};

export default IndividualPersonalizedPage;
