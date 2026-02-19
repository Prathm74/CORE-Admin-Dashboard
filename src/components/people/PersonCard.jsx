import styles from "./PersonCard.module.css";

export default function PersonCard({ person, index }) {
  return (
    <div
      className={styles.card}
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <div className={styles.avatarWrap}>
        <img src={"/images/people/p1.svg"} alt={person.name} />
        <img
          src={`/images/people/badge.svg`}
          className={styles.badgeIcon}
        />
      </div>

      <h4 className={styles.name}>{person.name}</h4>
      <p className={styles.role}>{person.role}</p>

      <div className={styles.dots}>
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
