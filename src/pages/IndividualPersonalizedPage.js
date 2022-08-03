import styles from "./IndividualPersonalizedPage.module.css";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import { participants } from "../Data/participants";
import { useEffect, useState } from "react";

const IndividualPersonalizedPage = () => {
  const [participant, setParticipant] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const individualParticiapnt = participants.find(x => x.Name === id);
    setParticipant(individualParticiapnt)    
}, [id, setParticipant]);

  return (
    <Loading DataLength={participant.length}>
      <section className={styles.home} id="home">
        <div className={styles["home-text"]}>
          <h3>Hallo, jeg er</h3>
          <br />
          <h1>{`${participant.Name} ${participant.LastName}`}</h1>
          <br />
          <h5>Student at Ikomm Academy</h5>
          <p>{participant.ShortInfo}</p>
          <div className={styles.social}>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href={participant.GithubLink} target="_blank" rel="noreferrer">
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
            src={participant.Image}
            alt="ProfilePic"
          />
        </div>
      </section>
    </Loading>
  );
};

export default IndividualPersonalizedPage;
