import { borderRadius, Box, createTheme, margin, padding } from "@mui/system";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../hooks/useScrollPosition";
import CustomLink from "./UI/CustomLink";
import styles from "./Navbar.module.css";
import Button from "./UI/Button";

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  let navClass =
    scrollPosition > 0 ? styles.nav + " " + styles.scroll : styles.nav;
  return (
    <Box
      className={navClass}
      sx={{
        "a:first-of-type": {
          m: "0 3rem",
          textDecoration: "none",
          color: "white",
        },
        "a>h4": {
          m: "1rem 0 0 9.5rem",
        },
        "div:first-of-type": {
          display: "flex",
        },
        'a:last-child': {
          mb: '0.3rem',
        }
      }}
    >
      <Link to="/">
        <h4>IKOMM ACADEMY</h4>
      </Link>
      <div>
        <CustomLink to="/Home">Hjem</CustomLink>
        <CustomLink to="/Articles">Siste nytt</CustomLink>
        <CustomLink to="/About">Kandidatene</CustomLink>
        <CustomLink to="/AcademyTV">Academy TV</CustomLink>
        <CustomLink to="/Contact">Kontaktinfo</CustomLink>

        <Button to={"/login"}>Logg inn</Button>
      </div>
    </Box>
  );
};

export default Navbar;
