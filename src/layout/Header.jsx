import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";
import Icons from "../assets/icons";

export default function Header({ setMobileOpen }) {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname.includes("timesheet")) {
      return (
        <div className={styles.breadcrumb}>
          <span className={styles.parent}>
            Team Management
          </span>
          <span className={styles.separator}>
            &gt;
          </span>
          <span className={styles.child}>
            Timesheet
          </span>
        </div>
      );
    }

    if (location.pathname.includes("people"))
      return "People";

    return "Dashboard";
  };

  return (
    <div className={styles.header}>
      <button
        className={styles.menuBtn}
        onClick={() => setMobileOpen(true)}
      >
        ☰
      </button>

      <div className={styles.left}>
        <h3 className={styles.pageTitle}>
          {getTitle()}
        </h3>
      </div>

      <div className={styles.right}>
        <div className={styles.pill}>MST</div>

        <div className={styles.timerGroup}>
          <img src={Icons.Clock} />
          <span>02:03:02</span>

          <button className={styles.iconInside}>
            <img src={Icons.iconBtn} />
          </button>
        </div>

        <button className={styles.pillIcon}>
          <img src={Icons.Notification} />

          <span className={styles.redDot}></span>
        </button>

        <img
          src={Icons.Avatar}
          className={styles.avatar}
        />
      </div>
    </div>
  );
}
