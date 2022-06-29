import { Achievement } from "../Components/Achievement";
import { Student } from "../Components/Student";
import styles from "./About.module.css";
import { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import { achievements } from "../Data/achievements";

const About = () => {
  const [studentsFromApi, setStudentsFromApi] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7045/api/allstudents")
      .then((res) => res.json())
      .then((res) => setStudentsFromApi(res));
  }, []);
  const achievementsRendered = achievements.map((achievement, index) => (
<Achievement
        key={index}
        nrOfAchievement={achievement.nr}
        iconAchievement={achievement.icon}
        finishedAchievement={achievement.finished}
      />
  ))

  // if (studentsFromApi.length > 0)
  const studentsRendered = studentsFromApi.map((student, index) => (
    <Student
      key={index}
      src={student.ProfileImage}
      studentName={student.Name}
      smallInfo={student.ShortInfo}
      gitAccount={student.Github}
    />
  ));

  return (
    <>
      <h2 id={styles.students_header}>Årets kull</h2>
      <Loading DataLength={studentsFromApi.length}>
        <section className={styles.team}>
          <div className={`${styles.container} ${styles.team__container}`}>
            {studentsRendered}
          </div>
        </section>
      </Loading>
      <section className={styles.about__achievements}>
        <div
          className={`${styles.container} ${styles["about__achievements-container"]}`}
        >
          <div className={styles["about__achievements-left"]}>
            <img src="/images/about_achievements.svg" alt="achievement" />
          </div>

          <div className={styles["about__achievements-right"]}>
            <h1>Resultater</h1>
            <p>
              Vi jobber for å få folk ut av NAV-systemet og inn i helt nye
              karrierer, og det på rekordtid. Det er ikke småtteri. Vi er mange
              som er med på å gjøre dette mulig, det være seg den eminente
              foreleseren fra Nederland, et fantastisk samarbeid med ildsjeler i
              NAV, våre egne mentorer fra Ikomm, praksisbedrifter, og mest av
              alt, kandidatene selv som griper denne sjansen med blod, svette,
              og tårer. Vi er stolte over de resultatene vi sammen har oppnådd
              med Ikomm Academy, her er de mest synlige av dem.
              <strong>I tillegg</strong> er vi veldig godt i gang med den tredje
              gjennomføringen av Ikomm Academy. Det er i år 7 studenter, og ting
              fungerer bedre enn noen gang. Til høsten gleder vi oss til å
              presentere mange nye IT-talenter til samfunnet.
            </p>
            <div className={styles.achievements__cards}>
              {achievementsRendered}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
