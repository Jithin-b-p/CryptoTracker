import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import styles from "./styles.module.css";

import { useState } from "react";

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
      </Drawer>
    </div>
  );
}
