import React from "react";

import classes from "./CheckoutForm.module.css";
import FormInput from "../UI/FormInput";
import useInput from "../hooks/useInput";

const CheckoutForm = (props) => {
  const [
    enteredName,
    nameValid,
    nameHasError,
    nameChangeHandler,
    nameBlurHandler,
    resetNameInput,
  ] = useInput(/^[a-zA-z ]+$/);
  const [
    enteredEmail,
    emailValid,
    emailHasError,
    emailChangeHandler,
    emailBlurHandler,
    resetEmailInput,
  ] = useInput(/^.+@.+\..+$/);
  const [
    enteredCity,
    cityValid,
    cityHasError,
    cityChangeHandler,
    cityBlurHandler,
    resetCityInput,
  ] = useInput(/^[a-zA-z]+$/);
  const [
    enteredStreet,
    streetValid,
    streetHasError,
    streetChangeHandler,
    streetBlurHandler,
    resetStreetInput,
  ] = useInput(/^.+$/);
  const [
    enteredPostal,
    postalValid,
    postalHasError,
    postalChangeHandler,
    postalBlurHandler,
    resetPostalInput,
  ] = useInput(/^[0-9]+$/);

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      !nameValid ||
      !emailValid ||
      !cityValid ||
      !streetValid ||
      !postalValid
    ) {
      return;
    }

    resetNameInput();
    resetEmailInput();
    resetCityInput();
    resetStreetInput();
    resetPostalInput();

    props.submitOrder({
      name: enteredName.trim(),
      email: enteredEmail,
      city: enteredCity,
      street: enteredStreet,
      postalCode: enteredPostal,
    });
  };
  
  return (
    <form
      id="checkout-form"
      className={classes.container}
      onSubmit={submitHandler}
    >
      <div className={classes.fixed}>
        <FormInput
          id="name"
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          hasError={nameHasError}
        >
          Name
        </FormInput>
        <FormInput
          id="email"
          type="text"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          hasError={emailHasError}
        >
          Email
        </FormInput>
      </div>
      <div className={classes["flex-item"]}>
        <FormInput
          id="city"
          type="text"
          value={enteredCity}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
          hasError={cityHasError}
        >
          City
        </FormInput>
        <FormInput
          id="street"
          type="text"
          value={enteredStreet}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
          hasError={streetHasError}
        >
          Street
        </FormInput>
        <FormInput
          id="postal"
          type="number"
          value={enteredPostal}
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
          hasError={postalHasError}
        >
          Postal Code
        </FormInput>
      </div>
    </form>
  );
};

export default CheckoutForm;
