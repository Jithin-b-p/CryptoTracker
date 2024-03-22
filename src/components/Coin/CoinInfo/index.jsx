/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./styles.module.css";

function CoinInfo({ heading, desc }) {
  const shortDesc =
    desc.slice(0, 200) + "..." + "<span class='readmore'>Read More</span>";
  const longDesc =
    desc + "<span class='readmore' style='display:block'>Read Less</span>";
  const [displayDesc, setDisplayDesc] = useState(shortDesc);

  const handleOnClickReadMore = () => {
    if (displayDesc === shortDesc) {
      setDisplayDesc(longDesc);
    } else {
      setDisplayDesc(shortDesc);
    }
  };

  return (
    <div className="grey-wrapper">
      <h2 className={styles.coin_heading}>{heading}</h2>
      {desc.length > 200 ? (
        <p
          className={styles.coin_desc}
          dangerouslySetInnerHTML={{ __html: displayDesc }}
          onClick={handleOnClickReadMore}
        />
      ) : (
        <p
          className={styles.coin_desc}
          dangerouslySetInnerHTML={{ __html: displayDesc }}
        />
      )}
    </div>
  );
}

export default CoinInfo;
