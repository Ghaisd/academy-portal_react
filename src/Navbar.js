import { Link } from "react-router-dom";
import { useScrollPosition } from "./hooks/useScrollPosition";
import CustomLink from "./Components/CustomLink";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  let navClass =
    scrollPosition > 0 ? styles.nav + " " + styles.scroll : styles.nav;
  return (
    <div className={navClass}>
      <Link to="/" className={styles.site_title}>
        <h4>IKOMM ACADEMY</h4>
      </Link>
      <ul className={styles.nav__menu}>
        <CustomLink className={styles.nav__item} to="/Home">
          Hjem
        </CustomLink>
        <CustomLink className={styles.nav__item} to="/Articles">
          Siste nytt
        </CustomLink>
        <CustomLink className={styles.nav__item} to="/About">
          Kandidatene
        </CustomLink>
        <CustomLink className={styles.nav__item} to="/AcademyTV">
          Academy TV
        </CustomLink>
        <CustomLink className={styles.nav__item} to="/Contact">
          Kontaktinfo
        </CustomLink>
        <CustomLink
          className={`${styles.nav__item} ${styles.btn_login}`}
          to="/#"
        >
          Logg inn
        </CustomLink>
      </ul>
    </div>
  );
};

export default Navbar;
