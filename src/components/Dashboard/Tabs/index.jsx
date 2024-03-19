/* eslint-disable react/prop-types */
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";

import styles from "./styles.module.css";
import Grid from "../Grid";

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("grid view");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const stylesTab = {
    color: "var(--white)",
    fontWeight: "600",
    fontSize: "1.2rem",
    fontFamily: "Inter",
    textTransform: "capitalize",
  };

  const theme = createTheme({
    palette: {
      main: "#3a80e9",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          variant="fullWidth"
          aria-label="view tab"
          sx={{ maxWidth: "92rem", marginInline: "auto" }}
        >
          <Tab label="grid" value="grid view" sx={stylesTab} />
          <Tab label="list" value="list view" sx={stylesTab} />
        </TabList>

        <TabPanel value="grid view">
          <div className={styles.grid}>
            {coins.map((coin) => {
              return <Grid coin={coin} key={coin.name} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="list view">list</TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
