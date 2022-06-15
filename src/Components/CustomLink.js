import { Link} from "react-router-dom";
import styles from "./CustomLink.module.css";
export default function CustomLink({ to, children, ...props }) {
  return (
    <li   
    className={styles.link_contact}
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
