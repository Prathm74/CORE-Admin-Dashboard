import { useState } from "react";
import styles from "./PeopleActions.module.css";
import Icons from "../../assets/icons";

export default function PeopleActions({
  search,
  setSearch,
  sort,
  setSort,
  data,
}) {
  const [view, setView] = useState("grid"); // 🔥 active toggle

  const handleDownload = () => {
    const blob = new Blob(
      [JSON.stringify(data, null, 2)],
      { type: "application/json" }
    );

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "people.json";
    a.click();
  };

  return (
    <div className={styles.wrapper}>
      {/* SEARCH */}
      <div className={styles.search}>
        <img src={Icons.Search} />
        <input
          placeholder="Search by Employee Name or Number"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* RIGHT ACTIONS */}
      <div className={styles.actions}>
        <button>
          <img src={Icons.Download} />
        </button>

        <button
          onClick={() =>
            setSort(sort === "asc" ? "desc" : "asc")
          }
        >
          <img src={Icons.Filter} />
        </button>

        <button className={styles.dark}>
          +
        </button>

        {/* 🔥 VIEW GROUP */}
        <div className={styles.viewGroup}>
          <button
            className={
              view === "grid" ? styles.active : ""
            }
            onClick={() => setView("grid")}
          >
            <img src={Icons.Grid} />
          </button>

          <button
            className={
              view === "list" ? styles.active : ""
            }
            onClick={() => setView("list")}
          >
            <img src={Icons.List} />
          </button>

          <button
            className={
              view === "tree" ? styles.active : ""
            }
            onClick={() => setView("tree")}
          >
            <img src={Icons.Tree} />
          </button>
        </div>
      </div>
    </div>
  );
}
