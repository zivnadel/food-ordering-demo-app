import React from "react";

import styles from "./UserItem.module.css";

const UserItem = (props) => {
  return (
    <li className={styles["user-item"]}>
      <h1>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {props.username} ({props.age} years old)
      </h1>
    </li>
  );
};

export default UserItem;
