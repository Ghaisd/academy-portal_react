import styles from './Student.module.css';
import CustomLink from './UI/CustomLink';

const Student = ({
  src, studentName, smallInfo, gitAccount,
}) => {
  return (

    <article className={styles.team__member}>
      <div className={styles['team__member-image']}>
        <img src={src} alt="Student" />
      </div>
      <div className={styles['team__member-info']}>
        <h4>{studentName}</h4>
        <p>{smallInfo}</p>
      </div>
      <div className={styles['team__member-socials']}>
        <CustomLink to={`/About/${studentName}`}>
          {' '}
          <i className="bi bi-file-earmark-person" />
        </CustomLink>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          {' '}
          <i className="bi bi-linkedin" />
        </a>
        <a href={gitAccount} target="_blank" rel="noreferrer">
          {' '}
          <i className="bi bi-github" />
        </a>
      </div>
    </article>
  );
};

export default Student;
