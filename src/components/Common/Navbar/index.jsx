import { Link } from "react-router-dom";
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
          <Link to="/">Home</Link>
        </li>
        <li className={`${styles.item} ${styles.item2}`}>
          <Link to="/compare">Compare</Link>
        </li>
        <li className={`${styles.item} ${styles.item3}`}>
          <Link href="/watchlist">Watchlist</Link>
        </li>
        <li className={`${styles.item} ${styles.item4}`}>
          <Link to="/dashboard">
            <Button
              onClick={() => console.log("btn-click")}
              content="Dashboard"
            />
          </Link>
        </li>
      </ul>

      <div className={styles.mobile__drawer}>
        <AnchorTemporaryDrawer />
      </div>
    </nav>
  );
}

export default Navbar;
