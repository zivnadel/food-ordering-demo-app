import { useState } from "react";

const useInput = (regex) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const isValid = regex.test(enteredValue);
  const hasError = !isValid && inputTouched;

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    if(enteredValue !== "") {
      setInputTouched(true);
    } else if(!isValid) {
      setInputTouched(false);
    }
  }

  const resetInput = () => {
    setEnteredValue("");
    setInputTouched(false);
  };

  return [enteredValue, isValid, hasError, inputChangeHandler, inputBlurHandler, resetInput];
};

export default useInput;
