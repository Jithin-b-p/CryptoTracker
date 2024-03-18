import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import styles from "./styles.module.css";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen((open) => !open)}>
        <MenuRoundedIcon className={styles.menu_icon} />
      </Button>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen((open) => !open)}
      >
        <ul className={styles.navigation__items}>
          <li className={`${styles.item} ${styles.item1}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${styles.item} ${styles.item2}`}>
            <Link to="/compare">Compare</Link>
          </li>
          <li className={`${styles.item} ${styles.item3}`}>
            <Link to="/watchlist">Watchlist</Link>
          </li>
          <li className={`${styles.item} ${styles.item4}`}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </Drawer>
    </div>
  );
}
