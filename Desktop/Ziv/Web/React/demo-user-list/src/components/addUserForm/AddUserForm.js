import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./AddUserForm.module.css";

const AddUserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameChangedHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      id: Math.random().toString(),
      username: username,
      age: +age,
    };

    if (username === "" || age === "") {
      props.onFieldEmpty();
    } else if (age < 1) {
      props.onInvalidAge();
    } else {
      props.onAddUser(userData);
    }

    setUsername("");
    setAge("");
  };

  return (
    <Card>
      <h2>Add User</h2>
      <form onSubmit={submitHandler}>
        <div className={styles["input-box"]}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={usernameChangedHandler}
          ></input>
        </div>
        <div className={styles["input-box"]}>
          <label>Age (Years)</label>
          <input type="number" value={age} onChange={ageChangedHandler}></input>
        </div>
        <Button type="submit" text="Add User" />
      </form>
    </Card>
  );
};

export default AddUserForm;
