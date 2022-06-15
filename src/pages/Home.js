import CustomLink from '../Components/CustomLink';
import styles from './Home.module.css'
export default function Home() {
  return (
    /* ======================= HEADER ========================*/
    <header>
      <div className={`${styles.container} ${styles.header__container}`}>
        <div className={styles.header__left}>
          <h1>
            Det handler om å gi flinke folk en sjanse, og å finne flinke folk
            som tar den.
          </h1>
          <p className={styles.long__paragraph}>
            Med Ikomm Academy har Ikomm i tett samarbeid med NAV Lillehammer
            bevist at det fortsatt finnes ekte vinn-vinn-situasjoner. Kort
            fortalt henter vi med Ikomm Academy kodetalenter ut av NAV-systemet,
            skolerer dem i moderne utviklingsprinsipper og kodespråk, og får dem
            ut i arbeid - enten hos oss eller hos noen andre. Vi som
            arbeidsgiver får tak i kompetanse vi mangler, NAV får folk ut i
            arbeid, samfunnet utnytter ressursene våre bedre, og ikke minst får
            kandidatene selv en helt unik mulighet til å slå seg opp i en
            karriere full av fremtidsmuligheter.
          </p>
          <CustomLink to ="/Contact" className={`btn btn-danger ${styles.btn}`}>
            Bli med!
          </CustomLink>
        </div>

        <div className="header__right">
          <div className="header__right-image">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6876623560589283328"
              height="540"
              width="504"
              allowfullscreen=""
              title="Embedded post"
            ></iframe>
          </div>
        </div>
      </div>
    </header>
  );
}
