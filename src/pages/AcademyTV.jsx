import Video from '../Components/Video';
import videos from '../Data/videos';
import styles from './AcademyTV.module.css';

const AcademyTV = () => {
  const videosRendered = videos.map((video) => (
    <Video key={video.title} headerText={video.headerText} src={video.src} title={video.title} />
  ));
  return (
    <section className={styles.videos}>
      <div className={styles.videos__container}>
        {videosRendered}
      </div>
    </section>
  );
};

export default AcademyTV;
