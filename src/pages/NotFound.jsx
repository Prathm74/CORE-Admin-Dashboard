import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <h1>404</h1>
      <p>Page not found</p>

      <Link to="/people" className={styles.btn}>
        Go to People
      </Link>
    </div>
  );
}
