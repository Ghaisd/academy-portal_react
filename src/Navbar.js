import { Link } from "react-router-dom";
import CustomLink from "./Components/CustomLink";
// import { Children } from "react";

export default function Navbar() {
  return (
    <div className="nav">
      <Link to="/Home" className="site-title">
        <h4>IKOMM ACADEMY</h4>
      </Link>
      <ul  className="nav__menu">
        <CustomLink className="nav__item" to="/Home">Hjem</CustomLink>
        <CustomLink className="nav__item" to="/Articles">Siste nytt</CustomLink>
        <CustomLink className="nav__item" to="/About">Kandidatene</CustomLink>
        <CustomLink className="nav__item" to="/AcademyTV">Academy TV</CustomLink>
        <CustomLink className="nav__item" to="/Contact">Kontaktinfo</CustomLink>
      </ul>
    </div>
  );
}

