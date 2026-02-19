import styles from "./SkeletonCard.module.css";

export default function SkeletonCard({ index }) {
  return (
    <div
      className={styles.card}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className={styles.avatar} />
      <div className={styles.name} />
      <div className={styles.role} />

      <div className={styles.dots}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
