import styles from "./Video.module.css";

export const Video = ({headerText, src, title}) => {
  return (
    <div className={styles.video}>
      <h1>{headerText}</h1>
      <iframe
        src={src}
        allowFullScreen
        title={title}
      ></iframe>
    </div>
  );
};
