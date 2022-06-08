import React from "react";

import classes from "./FormInput.module.css";

const FormInput = (props) => {
  return (
    <div className={classes.group}>
      <input
        className={classes.input}
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        required
      ></input>
      <span className={classes.highlight}></span>
      <span className={`${classes.bar} ${props.hasError && classes.invalid}`}></span>
      <label className={`${classes.label} ${props.hasError && classes.invalid}`} htmlFor={props.id}>
        {props.children}
      </label>
      {props.hasError && <p>Invalid input!</p>}
    </div>
  );
};

export default FormInput;
