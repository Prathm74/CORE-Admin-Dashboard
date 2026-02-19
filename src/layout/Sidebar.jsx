import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";
import Icons from "../assets/icons";
import {
    ChevronRight,
    ChevronDown,
    ChevronsLeft,
} from "lucide-react";

export default function Sidebar({ mobileOpen, setMobileOpen }) {
    const [openTeam, setOpenTeam] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();


    const isTimesheet =
        location.pathname === "/team-management/timesheet";

    return (
        <aside
            className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""
                } ${mobileOpen ? styles.mobileOpen : ""}`}
        >

            <div>
                {/* LOGO */}
                <div className={styles.logoRow}>
                    {!collapsed &&
                        <img
                            src={Icons.CoreLogo}
                            className={styles.coreLogo}
                            alt="CORE"
                        />
                    }



                    <div
                        className={styles.collapseBtn}
                        onClick={() => {
                            if (window.innerWidth <= 768) {
                                setMobileOpen(false);   // 🔥 MOBILE CLOSE
                            } else {
                                setCollapsed(!collapsed); // desktop collapse
                            }
                        }}
                    >
                        <ChevronsLeft
                            size={26}
                            className={collapsed ? styles.rotate : ""}
                        />
                    </div>

                </div>


                <nav className={styles.nav}>
                    {/* HOME */}
                    <div className={styles.link}>
                        <img src={Icons.Home} className={styles.icon} />
                        <span
                            className={`${styles.label} ${collapsed ? styles.hide : ""
                                }`}
                        >
                            Home
                        </span>
                    </div>

                    {/* MY INFO */}
                    <div className={styles.link}>
                        <img src={Icons.MyInfo} className={styles.icon} />
                        <span
                            className={`${styles.label} ${collapsed ? styles.hide : ""
                                }`}
                        >
                            My Info
                        </span>
                        {!collapsed && (
                            <ChevronRight
                                size={16}
                                className={styles.arrow}
                            />
                        )}
                    </div>

                    {/* PEOPLE */}
                    <NavLink
                        to="/people"
                        className={({ isActive }) =>
                            isActive
                                ? `${styles.link} ${styles.active}`
                                : styles.link
                        }
                    >
                        <img src={Icons.People} className={styles.icon} />
                        <span
                            className={`${styles.label} ${collapsed ? styles.hide : ""
                                }`}
                        >
                            People
                        </span>
                    </NavLink>

                    {/* TEAM MANAGEMENT */}
                    <div
                        className={`${styles.link} ${isTimesheet ? styles.parentActive : ""
                            }`}
                        onClick={() => setOpenTeam(!openTeam)}
                    >
                        <img src={Icons.Team} className={styles.icon} />

                        <span
                            className={`${styles.label} ${collapsed ? styles.hide : ""
                                }`}
                        >
                            Team Management
                        </span>

                        {!collapsed &&
                            (openTeam ? (
                                <ChevronDown
                                    size={16}
                                    className={styles.arrow}
                                />
                            ) : (
                                <ChevronRight
                                    size={16}
                                    className={styles.arrow}
                                />
                            ))}
                    </div>

                    {!collapsed && openTeam && (
                        <div className={styles.subWrapper}>
                            <div className={styles.svgWrapper}>
                                <svg
                                    className={styles.connector}
                                    width="24"
                                    height="75"
                                    viewBox="0 0 24 80"
                                    fill="none"
                                >
                                    <path
                                        d="M1 0 V22 Q1 30 12 30 H24"
                                        stroke="rgba(255,255,255,0.35)"
                                        strokeWidth="1"
                                    />
                                </svg>
                                <svg
                                    className={styles.connector1}
                                    width="24"
                                    height="100"
                                    viewBox="0 0 24 100"
                                    fill="none"
                                >
                                    <path
                                        d="M1 0 V56 Q1 75 12 75 H24"
                                        stroke="rgba(255,255,255,0.35)"
                                        strokeWidth="1"
                                    />
                                </svg>

                            </div>



                            <NavLink
                                to="/team-management/timesheet"
                                className={({ isActive }) =>
                                    isActive
                                        ? `${styles.subLink} ${styles.active}`
                                        : styles.subLink
                                }
                            >
                                <span>Timesheet</span>
                                <ChevronRight size={16} />
                            </NavLink>

                            <div className={styles.subLink}>
                                <span>Reimbursement</span>
                                <ChevronRight size={16} />
                            </div>
                        </div>
                    )}


                    {/* PROJECT */}
                    <div className={styles.link}>
                        <img src={Icons.Project} className={styles.icon} />
                        <span
                            className={`${styles.label} ${collapsed ? styles.hide : ""
                                }`}
                        >
                            Project Setup
                        </span>
                    </div>

                    {/* HIRING */}
                    <div className={styles.link}>
                        <img src={Icons.Hiring} className={styles.icon} />
                        <span
                            className={`${styles.label} ${collapsed ? styles.hide : ""
                                }`}
                        >
                            Hiring
                        </span>
                    </div>

                    {/* REPORT */}
                    <div className={styles.link}>
                        <img src={Icons.Report} className={styles.icon} />
                        <span
                            className={`${styles.label} ${collapsed ? styles.hide : ""
                                }`}
                        >
                            Report
                        </span>
                    </div>
                </nav>
            </div>

            {/* SETTINGS */}
            <div className={styles.settingsContainer}>
                <img src={Icons.Settings} className={styles.icon} />
                <span
                    className={`${styles.label} ${collapsed ? styles.hide : ""
                        }`}
                >
                    Settings
                </span>
            </div>
        </aside>
    );
}
