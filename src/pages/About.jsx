import Achievement from '../Components/Achievement';
import Student from '../Components/Student';
import styles from './About.module.css';
import Loading from '../Components/UI/Loading';
import achievements from '../Data/achievements';
import { staticTextAbout } from '../Data/staticText';
import participants from '../Data/participants';

const { achievementsSectionTextP } = staticTextAbout;

const About = () => {
  return (
    <>
      <h2 className={styles.students_header}>Årets kull</h2>
      <Loading DataLength={participants.length}>
        <section className={styles.team}>
          <div className={styles.team__container}>

            {participants.map((student) => (
              <Student
                key={student.Name}
                src={student.Image}
                studentName={student.Name}
                smallInfo={student.ShortInfo}
                gitAccount={student.GithubLink}
              />
            ))}
          </div>
        </section>
      </Loading>
      <section className={styles.about__achievements}>
        <div
          className={styles['about__achievements-container']}
        >
          <div>
            <img src="/images/about_achievements.svg" alt="achievement" />
          </div>

          <div className={styles['about__achievements-right']}>
            <h1>Resultater</h1>
            <p>
              {achievementsSectionTextP}
            </p>
            <div className={styles.achievements__cards}>
              {achievements.map((achievement) => (
                <Achievement
                  key={achievement.nr}
                  nrOfAchievement={achievement.nr}
                  iconAchievement={achievement.icon}
                  finishedAchievement={achievement.finished}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
