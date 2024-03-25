/* eslint-disable react/prop-types */
import SelectDays from "../../Coin/SelectDays";
import SelectCoins from "../SelectCoins";

import styles from "./styles.module.css";

function SelectCoinsContainer({
  fullCoins,
  valueOne,
  valueTwo,
  days,
  onDaysChange,
  onSelectionChangeOne,
  onSelectionChangeTwo,
}) {
  return (
    <div className={styles.selection_container}>
      <SelectCoins
        fullCoins={fullCoins.filter((coin) => coin.id !== valueTwo)}
        value={valueOne}
        variant={1}
        onSelectionChange={onSelectionChangeOne}
      />
      <SelectCoins
        fullCoins={fullCoins.filter((coin) => coin.id !== valueOne)}
        value={valueTwo}
        variant={2}
        onSelectionChange={onSelectionChangeTwo}
      />
      <SelectDays days={days} onDaysChange={onDaysChange} />
    </div>
  );
}

export default SelectCoinsContainer;
