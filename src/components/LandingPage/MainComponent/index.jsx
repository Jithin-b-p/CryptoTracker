import { motion } from "framer-motion";

import Button from "../../Common/Button";
import styles from "./styles.module.css";
import mobile from "../../../assets/mobile.png";
import gradient from "../../../assets/gradient.png";

function MainComponent() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_info}>
        <motion.h1
          className={styles.hero_info_title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto{" "}
        </motion.h1>
        <motion.h2
          className={styles.hero_info_title_2}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={styles.info_details}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className={styles.info_buttons}
        >
          <Button className={styles.dashboard_btn} content="Dashboard" />
          <Button content="Share" outlined={true} />
        </motion.div>
      </div>
      <div className={styles.imgs_container}>
        <motion.img
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          src={mobile}
          className={styles.mobile_img}
          alt=""
        />
        <img src={gradient} className={styles.gradient_img} alt="" />
      </div>
    </div>
  );
}

export default MainComponent;
