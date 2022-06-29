import styles from "./Login.module.css";
import React, { useState, useEffect, useReducer } from "react";

const regexEmailValidation =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// at least [(1 digit) + (one lower case) + (one upper case) + (8 char)]
const regexPasswordValidation =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

const formInputReducer = (state, action) =>
  action.type.includes("USER_INPUT")
    ? {
        value: action.val,
        isValid: (action.type.includes("Email")
          ? regexEmailValidation
          : regexPasswordValidation
        ).test(action.val),
      }
    : { value: "", isValid: false };


const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(formInputReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(formInputReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT_Email", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT_Password", val: event.target.value });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <span>Logg inn</span>
          </div>
          <form>
            <div className={styles.row}>
              <i className={`bi bi-person-fill`}></i>
              <input
                type="email"
                className={`${
                  emailState.isValid === false ? styles.invalid : ""
                }`}
                placeholder="E-postadresse"
                value={emailState.value}
                onChange={emailChangeHandler}
              />
            </div>
            <div className={styles.row}>
              <i className={`bi bi-lock-fill`}></i>
              <input
                type="password"
                className={`${
                  passwordState.isValid === false ? styles.invalid : ""
                }`}
                placeholder="Passord"
                value={passwordState.value}
                onChange={passwordChangeHandler}
              />
            </div>
            <div className={styles.pass}>
              <h6 id={styles.password_reset}>
                Har du glemt passordet? Kontakt oss!
              </h6>
            </div>
            <div className={`row button`}>
              <input
                type="submit"
                className={`${formIsValid ? styles.change_color : ""}`}
                disabled={!formIsValid}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
