import styles from "./styles.module.css";

import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

function BackToTop() {
  window.onscroll = () => {
    const btnTop = document.getElementById("moveTop");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btnTop.style.display = "block";
    } else {
      btnTop.style.display = "none";
    }
  };
  const handleOnClick = () => {
    // for safari
    document.body.scrollTop = 0;
    // for Edge, chrome
    document.documentElement.scrollTop = 0;
  };

  return (
    <button id="moveTop" className={styles.moveTop} onClick={handleOnClick}>
      <ArrowUpwardRoundedIcon sx={{ fontSize: "2.5rem" }} />
    </button>
  );
}

export default BackToTop;
