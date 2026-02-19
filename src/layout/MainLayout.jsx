import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styles from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className={styles.main}>
        <Header setMobileOpen={setMobileOpen} />

        <div className={styles.content}>
          <Outlet /> 
        </div>
      </div>
    </div>
  );
}
