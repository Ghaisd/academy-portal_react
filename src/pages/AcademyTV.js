import styles from "./AcademyTV.module.css";

const AcademyTV = () => {
  return (
    <section className={styles.videos}>
      <div className={`${styles.container} ${styles.videos__container}`}>
        <div className={styles.video}>
          <h1>Episode 1</h1>
          <iframe
            src="https://player.vimeo.com/video/715488104?h=982733e691&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="Academy 1 v2"
          ></iframe>
        </div>

        <div className={styles.video}>
          <h1>Episode 2</h1>

          <iframe
            src="https://player.vimeo.com/video/715494174?h=9f0d542cfd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="Academy 2 Kandidatene"
          ></iframe>
        </div>

        <div className={styles.video}>
          <h1>Episode 3</h1>

          <iframe
            src="https://player.vimeo.com/video/715496392?h=0304f0e1e6&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="Academy 3 Erik veileder"
          ></iframe>
        </div>

        <div className={styles.video}>
          <h1>Episode 4</h1>

          <iframe
            src="https://player.vimeo.com/video/715506520?h=512493a6fa&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="Academy 4 Oppgavel&amp;oslash;sing"
          ></iframe>
        </div>

        <div className={styles.video}>
          <h1>Episode 5</h1>

          <iframe
            src="https://player.vimeo.com/video/715511989?h=454d9d72b0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="Academy 5 Praksis"
          ></iframe>
        </div>

        <div className={styles.video}>
          <h1>Episode 6</h1>

          <iframe
            src="https://player.vimeo.com/video/715550683?h=70d6eac43c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="Academy 6 Hvordan gikk det"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AcademyTV;
