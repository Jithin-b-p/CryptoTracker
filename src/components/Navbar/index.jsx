import styles from "./styles.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>
        CryptoTracker <span style={{ color: "var(--blue)" }}>.</span>
      </h1>

      <ul className={styles.navigation__items}>
        <li className={`${styles.item} ${styles.item1}`}>
          <a href="/">Home</a>
        </li>
        <li className={`${styles.item} ${styles.item2}`}>
          <a href="/">Compare</a>
        </li>
        <li className={`${styles.item} ${styles.item3}`}>
          <a href="/">Watchlist</a>
        </li>
        <li className={`${styles.item} ${styles.item4}`}>
          <a href="/">Dashboard</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
