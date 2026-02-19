import styles from "./BlurLoader.module.css";

export default function BlurLoader({ count = 6 }) {
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.card}></div>
      ))}
    </div>
  );
}
