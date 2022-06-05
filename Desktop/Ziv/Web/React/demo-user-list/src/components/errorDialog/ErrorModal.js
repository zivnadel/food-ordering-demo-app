import React from "react";

import styles from "./ErrorModal.module.css";
import Button from "../UI/Button";

const ErrorModal = (props) => {

    const clickHandler = () => {
        props.onClosed();
    }

  return (
    <div className={styles["modal-container"]}>
      <div className={styles["modal-content"]}>
        <button onClick={clickHandler} className={styles["close-modal"]}>✖</button>
        <img
          src="https://cdn3.iconfinder.com/data/icons/android-mobile-icon/154/blue_error-512.png"
          alt="error-img"
        />
        <p>{props.errorMessage}</p>
        <Button onClick={clickHandler} text="Accept"/>
      </div>
    </div>
  );
};

export default ErrorModal;
