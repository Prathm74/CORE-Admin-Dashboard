import { useEffect, useState, useMemo } from "react";
import styles from "./Timesheet.module.css";
import Icons from "../../assets/icons";
import BlurLoader from "../../components/ui/BlurLoader";
import Pagination from "../../components/people/Pagination";
import { timesheetEmployees } from "../../data/timesheetData";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function Timesheet() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 8;

  const [sortConfig, setSortConfig] = useState(null);


  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const timeToMinutes = (time) => {
    if (!time || time === "-") return 0;
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  const handleSort = (key) => {
  setSortConfig((prev) => {]
    if (!prev || prev.key !== key) {
      return { key, direction: "asc" };
    }

    return {
      key,
      direction: prev.direction === "asc" ? "desc" : "asc",
    };
  });
};


  const filteredData = useMemo(() => {
    let data = [...timesheetEmployees];

    if (search) {
      data = data.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sortConfig) {
      data.sort((a, b) => {
        const { key, direction } = sortConfig;

        let valA = a[key];
        let valB = b[key];

        if (
          ["total", "regular", "overtime", "ot2", "holiday"].includes(key)
        ) {
          valA = timeToMinutes(valA);
          valB = timeToMinutes(valB);
          return direction === "asc" ? valA - valB : valB - valA;
        }

        return direction === "asc"
          ? valA.localeCompare(valB)
          : valB.localeCompare(valA);
      });
    }


    return data;
  }, [search, sortConfig]);

  const paginatedData = filteredData.slice(
    (page - 1) * perPage,
    page * perPage
  );

  const handleDownload = () => {
    const headers = [
      "Employee",
      "Total",
      "Regular",
      "Overtime",
      "OT2",
      "Holiday",
    ];

    const rows = filteredData.map((e) => [
      e.name,
      e.total,
      e.regular,
      e.overtime,
      e.ot2,
      e.holiday,
    ]);

    const csvContent =
      [headers, ...rows].map((r) => r.join(",")).join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "timesheet.csv";
    link.click();
  };

  if (loading) return <BlurLoader count={6} />;

  return (
    <div className={styles.wrapper}>
      <div className={styles.topBar}>
        <div className={styles.search}>
          <img src={Icons.Search} />
          <input
            placeholder="Search by Employee Name"
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
          />
        </div>

        <div className={styles.actions}>
          <div className={styles.dateBox}>
            <img src={Icons.Calendar} />
            <span>Nov 6, 2025 - Nov 6,2025</span>
          </div>

          <button
            className={styles.iconBtn}
            onClick={handleDownload}
          >
            <img src={Icons.Download} />
          </button>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <img src={Icons.statCard} />
          </div>
          <span>Total</span>
          <h3>169</h3>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <img src={Icons.statCard} />
          </div> <span>Regular</span>
          <h3>7</h3>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <img src={Icons.OverTime} />
          </div> <span>Overtime</span>
          <h3>320</h3>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <img src={Icons.OT2} />
          </div> <span>OT2</span>
          <h3>20</h3>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <img src={Icons.Holiday} />
          </div>
          <span>Holiday</span>
          <h3>8</h3>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>

            <img src={Icons.Anomalies} />
          </div> <span>Anomalies</span>
          <h3>3</h3>
        </div>
      </div>

      <TableContainer component={Paper} className={styles.table}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <div
                  className={`${styles.headerCell} ${sortConfig?.key === "name" ? styles.activeSort : ""
                    }`}
                  onClick={() => handleSort("name")}
                >
                  Employee
                  <img
                    src={Icons.Sort}
                    className={`${styles.sortIcon} ${sortConfig?.key === "name" &&
                        sortConfig?.direction === "desc"
                        ? styles.desc
                        : ""
                      }`}
                  />
                </div>
              </TableCell>

              <TableCell>
                <div
                  className={`${styles.headerCell} ${sortConfig?.key === "total" ? styles.activeSort : ""
                    }`}
                  onClick={() => handleSort("total")}
                >
                  Total
                  <img
                    src={Icons.increment}
                    className={`${styles.sortIcon} ${sortConfig?.key === "total" &&
                        sortConfig?.direction === "desc"
                        ? styles.desc
                        : ""
                      }`}
                  />
                </div>
              </TableCell>

              <TableCell>
                <div
                  className={`${styles.headerCell} ${sortConfig?.key === "regular" ? styles.activeSort : ""
                    }`}
                  onClick={() => handleSort("regular")}
                >
                  Regular
                  <img
                    src={Icons.increment}
                    className={`${styles.sortIcon} ${sortConfig?.key === "regular" &&
                        sortConfig?.direction === "desc"
                        ? styles.desc
                        : ""
                      }`}
                  />
                </div>
              </TableCell>

              <TableCell>
                <div
                  className={`${styles.headerCell} ${sortConfig?.key === "overtime" ? styles.activeSort : ""
                    }`}
                  onClick={() => handleSort("overtime")}
                >
                  Overtime
                  <img
                    src={Icons.Sort}
                    className={`${styles.sortIcon} ${sortConfig?.key === "overtime" &&
                        sortConfig?.direction === "desc"
                        ? styles.desc
                        : ""
                      }`}
                  />
                </div>
              </TableCell>

              <TableCell>
                <div
                  className={`${styles.headerCell} ${sortConfig?.key === "ot2" ? styles.activeSort : ""
                    }`}
                  onClick={() => handleSort("ot2")}
                >
                  OT 2
                  <img
                    src={Icons.Sort}
                    className={`${styles.sortIcon} ${sortConfig?.key === "ot2" &&
                        sortConfig?.direction === "desc"
                        ? styles.desc
                        : ""
                      }`}
                  />
                </div>
              </TableCell>

              <TableCell>
                <div
                  className={`${styles.headerCell} ${sortConfig?.key === "holiday" ? styles.activeSort : ""
                    }`}
                  onClick={() => handleSort("holiday")}
                >
                  Holiday
                  <img
                    src={Icons.Sort}
                    className={`${styles.sortIcon} ${sortConfig?.key === "holiday" &&
                        sortConfig?.direction === "desc"
                        ? styles.desc
                        : ""
                      }`}
                  />
                </div>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((emp, i) => (
              <TableRow key={i} hover>
                <TableCell>
                  <div className={styles.employee}>
                    <img src={emp.avatar} />
                    {emp.name}
                  </div>
                </TableCell>

                <TableCell>{emp.total}</TableCell>
                <TableCell>{emp.regular}</TableCell>
                <TableCell>{emp.overtime}</TableCell>
                <TableCell>{emp.ot2}</TableCell>
                <TableCell>{emp.holiday}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        page={page}
        setPage={setPage}
        total={filteredData.length}
        perPage={perPage}
      />
    </div>
  );
}
