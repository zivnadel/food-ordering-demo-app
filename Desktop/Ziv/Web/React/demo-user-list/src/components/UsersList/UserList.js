import React from "react";

import Card from "../UI/Card";
import UserItem from "./UserItem";

import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles["user-list"]}>
      {props.users.map((user) => (
        <UserItem key={user.id} username={user.username} age={user.age} />
      ))}
    </Card>
  );
};

export default UserList;
