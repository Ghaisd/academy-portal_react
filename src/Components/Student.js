import styles from './Student.module.css'
import CustomLink from "./CustomLink";

export const Student = (props) => {
    return (

        <article className={styles.team__member}>
    <div className={styles['team__member-image']}>
      <img src={props.src} alt="Student" />
    </div>
    <div className={styles['team__member-info']}>
      <h4>{props.studentName}</h4>
      <p>{props.smallInfo}</p>
    </div>
    <div className={styles['team__member-socials']}>
      <CustomLink to={`/About/${props.studentName}`}>
        {" "}
        <i className={`bi bi-file-earmark-person`}></i>
      </CustomLink>
      <a href="https://linkedin.com" target="_blank" rel='noreferrer'>
        {" "}
        <i className={`bi bi-linkedin`}></i>
      </a>
      <a href={props.gitAccount} target="_blank"  rel='noreferrer'>
        {" "}
        <i className={`bi bi-github`}></i>
      </a>
    </div>
  </article>
      );
};
