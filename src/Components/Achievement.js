import styles from "./Achievement.module.css";

export const Achievement = ({iconAchievement,nrOfAchievement,finishedAchievement}) => {
  return (
    <article className={styles.achievement__card}>
      <span className={styles.achievement__icon}>
        <i className={iconAchievement}></i>
      </span>
      <h3>{nrOfAchievement}</h3>
         <p>{finishedAchievement}</p>
    </article>
  );
};
