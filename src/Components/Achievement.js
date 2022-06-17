import styles from "./Achievement.module.css";

export const Achievement = (props) => {
  return (
    <article className={styles.achievement__card}>
      <span className={styles.achievement__icon}>
        <i className={props.iconAchievement}></i>
      </span>
      <h3>{props.nrOfAchievement}</h3>
      <p>{props.finishedAchievement}</p>
    </article>
  );
};
