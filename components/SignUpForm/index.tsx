import React from "react";
import styles from "../../styles/SignUp.module.css";


const SignUpForm = (): JSX.Element => {
  const submitNewUser = (event : any) => {
    event.preventDefault();
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.formElement}>
        <h3 className={styles.formTitle}>Sign Up</h3>
        <div className={styles.formDiv}>
          <p>Display Name:</p>
          <p>(this can be changed)</p>
          <input
            type="text"
            id="displayName"
            name="displayName"
            placeholder="Display Name"
          />
        </div>
        <div className={styles.formDiv}>
          <p>E-Mail Address:</p>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            placeholder="example@test.com"
          />
        </div>
        <div className={styles.formDiv}>
          <p>Password:</p>
          <input
            type="password"
            id="userPassword"
            name="userPassword"
            placeholder="******"
          />
        </div>
        <div className={styles.formDiv}>
          <p>Confirm password:</p>
          <input
            type="password"
            id="userConfirmPassword"
            name="userConfirmPassword"
            placeholder="******"
          />
        </div>
        <button type="button" onClick={submitNewUser}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
