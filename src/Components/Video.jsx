import styles from './Video.module.css';

const Video = ({ headerText, src, title }) => {
  return (
    <div className={styles.video}>
      <h1>{headerText}</h1>
      <iframe
        src={src}
        allowFullScreen
        title={title}
      />
    </div>
  );
};

export default Video;
