/* eslint-disable react/prop-types */
import List from "../../Dashboard/List";
// import styles from "./styles.module.css";
function CompareListContainer({ cryptoOneData, cryptoTwoData }) {
  return (
    <>
      <div className="grey-wrapper">
        <List coin={cryptoOneData} />
      </div>
      <div className="grey-wrapper">
        <List coin={cryptoTwoData} />
      </div>
    </>
  );
}

export default CompareListContainer;
