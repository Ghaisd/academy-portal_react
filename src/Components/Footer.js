import CustomLink from './CustomLink';
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={`${styles.container} ${styles.footer__container}`}>
        <div className={styles.footer__1}>
          <Link to="/" className={styles.site_title}>
            <h4>IKOMM ACADEMY</h4>
          </Link>

          <p>Talent finnes overalt for den som leter.</p>
          <img
            className={styles.img_logo}
            src="/images/Logo_Transparent_hvit.png"
            alt="Logo"
          />
        </div>

        <div className={styles.footer__2}>
          <h4>Sidemeny</h4>
          <ul className={styles.permalinks}>
            <CustomLink to="/Home">Hjem</CustomLink>
            <CustomLink to="/Articles">Siste nytt</CustomLink>
            <CustomLink to="/About">Kandidatene</CustomLink>
            <CustomLink to="/AcademyTV">Academy TV</CustomLink>
            <CustomLink to="/Contact">Kontaktinfo</CustomLink>
          </ul>
        </div>

        <div className={styles.footer__3}>
          <h4>Kontaktinfo</h4>
          <div>
            <p>94970223</p>
            <p>academy@ikomm.no </p>
          </div>

          <ul className={styles.footer__socials}>
            <li>
              <a href="https://www.facebook.com/ikommas/">
                <i className={`bi bi-facebook`}></i>
              </a>
            </li>
            <li>
              <a href="https://no.linkedin.com/company/ikomm?original_referer=https%3A%2F%2Fwww.ikomm.no%2F">
                <i className={`bi bi-linkedin`}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footer__copyright}>
        <small>Copyright &copy;2022 IKOMM-ACADEMY</small>
      </div>
    </footer>
  );
};

export default Footer;
