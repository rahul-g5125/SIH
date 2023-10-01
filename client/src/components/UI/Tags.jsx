import styles from "./Tags.module.css";

export default function Tags() {
  return (
    <div className={styles.tags}>
      <div className={styles.tag}>ReactJS</div>
      <div className={styles.tag}>NodeJS</div>
      <div className={styles.tag}>MongoDB</div>
      <div className={styles.tag}>Django</div>
    </div>
  );
}
