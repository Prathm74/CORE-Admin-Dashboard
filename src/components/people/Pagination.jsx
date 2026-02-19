import styles from "./Pagination.module.css";

export default function Pagination({
  page,
  setPage,
  total,
  perPage,
}) {
  const totalPages = Math.ceil(total / perPage);

  return (
    <div className={styles.wrapper}>
      {/* LEFT */}
      <div className={styles.left}>
        <span>Rows per page:</span>

        <select className={styles.select}>
          <option>8</option>
        </select>
      </div>

      {/* CENTER */}
      <div className={styles.center}>
        {`${(page - 1) * perPage + 1}-${Math.min(
          page * perPage,
          total
        )} of ${total}`}
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          {"<"}
        </button>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
