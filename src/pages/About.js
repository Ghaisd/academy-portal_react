import { Achievement } from "../Components/Achievement";
import { Student } from "../Components/Student";
import styles from "./About.module.css";
import { useState, useEffect } from "react";
import Loading from "../Components/Loading";
import { achievements } from "../Data/achievements";
import { staticTextAbout } from "../Data/staticText";

const {achievementsSectionTextP} = staticTextAbout

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
            {achievementsSectionTextP}
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
