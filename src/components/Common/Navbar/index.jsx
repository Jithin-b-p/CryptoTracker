import Button from "../Button";
import AnchorTemporaryDrawer from "../Header/drawer";
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
          <Button
            onClick={() => console.log("btn-click")}
            content="Dashboard"
          />
        </li>
      </ul>

      <div className={styles.mobile__drawer}>
        <AnchorTemporaryDrawer />
      </div>
    </nav>
  );
}

export default Navbar;
