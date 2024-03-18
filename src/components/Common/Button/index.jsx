/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

function Button({ content, onClick, outlined }) {
  return (
    <button
      onClick={onClick}
      className={outlined ? styles.btn__outlined : styles.btn}
    >
      {content}
    </button>
  );
}

export default Button;
