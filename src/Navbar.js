import { Link } from "react-router-dom";
import CustomLink from "./Components/CustomLink";
import styles from './Navbar.module.css'

// import { Children } from "react";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <Link to="/Home" className={styles.site_title}>
        <h4>IKOMM ACADEMY</h4>
      </Link>
      <ul  className={styles.nav__menu}>
        <CustomLink className={styles.nav__item} to="/Home">Hjem</CustomLink>
        <CustomLink className={styles.nav__item} to="/Articles">Siste nytt</CustomLink>
        <CustomLink className={styles.nav__item} to="/About">Kandidatene</CustomLink>
        <CustomLink className={styles.nav__item} to="/AcademyTV">Academy TV</CustomLink>
        <CustomLink className={styles.nav__item} to="/Contact">Kontaktinfo</CustomLink>
      </ul>
    </div>
  );
}

