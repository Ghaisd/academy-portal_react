import { Achievement } from "../Components/Achievement";
import { Student } from "../Components/Student";
import styles from "./About.module.css";
import Loading from "../Components/Loading";
import { achievements } from "../Data/achievements";
import { staticTextAbout } from "../Data/staticText";
import { participants } from "../Data/participants";

const {achievementsSectionTextP} = staticTextAbout

const About = () => {
 
  const achievementsRendered = achievements.map((achievement, index) => (
<Achievement
        key={index}
        nrOfAchievement={achievement.nr}
        iconAchievement={achievement.icon}
        finishedAchievement={achievement.finished}
      />
  ))

  const studentsRendered = participants.map((student, index) => (
    <Student
      key={index}
      src={student.Image}
      studentName={student.Name}
      smallInfo={student.ShortInfo}
      gitAccount={student.GithubLink}
    />
  ));

  return (
    <>
      <h2 id={styles.students_header}>Årets kull</h2>
      <Loading DataLength={participants.length}>
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
