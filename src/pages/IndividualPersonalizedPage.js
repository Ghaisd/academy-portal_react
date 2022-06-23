import styles from "./IndividualPersonalizedPage.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const IndividualPersonalizedPage = () => {
  const { id } = useParams();
  const [studentsFromApi, setstudentsFromApi] = useState('');
  const [index, setIndex] = useState(0);
  const studentsNames = [
    "Argyro Zaouti",
    "Ghais Dahdouh",
    "Khashayar Nariman",
    "Lutpulla Ekrem",
    "Mohammad Kellab",
    "Steffen Wold",
    "Tor Pettersen",
  ];
   // onMount
   useEffect(() => {
     fetch("https://localhost:7045/api/allstudents").then((res) => res.json()).then((res) => setstudentsFromApi(res)  
     );
    for (let i = 0; i < studentsNames.length; i++) {
      if (studentsNames[i].replace(/ .*/,'') === id){
        setIndex(i);
      }
    }
  }, []);

  if(studentsFromApi.length > 0)
  return (
    <section className={styles.home} id="home">
      <div className={styles["home-text"]}>
        <h3>Hallo, jeg er</h3>
        <br />
        <h1>
          {studentsFromApi[index].Name}
        </h1>
        <br />
        <h5>Student at Ikomm Academy</h5>
        <p>{studentsFromApi[index].ShortInfo}</p>
        <div className={styles.social}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href={studentsFromApi[index].Github} target="_blank" rel="noreferrer">
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
          src={studentsFromApi[index].ProfileImage}
          alt="ProfilePic"
        />
      </div>
    </section>
  );
};

export default IndividualPersonalizedPage;

