import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {

  return (
    <button onClick={props.onClick} className={styles["ui-button"]} type={props.type}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {props.text}
    </button>
  );
};

export default Button;
