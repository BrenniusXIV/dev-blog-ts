import React from "react";
import styles from "../../styles/SignUp.module.css";

const SignUpForm = (): JSX.Element => {
  const [displayName, setDisplayName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
  const [passwordToConfirm, setPasswordToConfirm] = React.useState("");

  const handleDisplayNameChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    let nameValue: string = event.currentTarget.value;
    return setDisplayName(nameValue);
  };

  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    let emailValue: string = event.currentTarget.value;
    return setEmailAddress(emailValue);
  };
  const handleUserPasswordChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    let passwordValue: string = event.currentTarget.value;
    return setUserPassword(passwordValue);
  };
  const handlePasswordToConfirmChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    let passwordValue: string = event.currentTarget.value;
    return setPasswordToConfirm(passwordValue);
  };

  const checkPasswordsMatch = (password: string, toConfirm: string) => {
    return password == toConfirm ? true : false;
  };

  const validateFields = () => {
    if (!displayName || !emailAddress || !userPassword || !passwordToConfirm) {
      return false;
    } else {
      return true;
    }
  };

  const displaySuccessMessage = (message: string) => {
    const destinationDiv = document.getElementById("successDiv");
    const successMessageP = document.createElement("p");
    successMessageP.innerHTML = message;
    successMessageP.id = "successMessage";
    destinationDiv?.appendChild(successMessageP);
    setTimeout(removeSuccessMessage, 10000);
  };

  const displayErrorMessage = (message: string) => {
    const destinationDiv = document.getElementById("errorDiv");
    const errorMessageP = document.createElement("p");
    errorMessageP.innerHTML = message;
    errorMessageP.id = "errorMessage";
    destinationDiv?.appendChild(errorMessageP);
    setTimeout(removeErrorMessage, 10000);
  };

  const removeErrorMessage = () => {
    const messageToRemove = document.getElementById("errorMessage");
    messageToRemove?.remove();
  };

  const removeSuccessMessage = () => {
    const messageToRemove = document.getElementById("successMessage");
    messageToRemove?.remove();
  };

  const clearFormFields = () => {
    const fields = [
      document.getElementById("displayName"),
      document.getElementById("emailAddress"),
      document.getElementById("userPassword"),
      document.getElementById("userConfirmPassword"),
    ];
    fields.forEach((node) => (node.value = ""));
    
  };

  const submitNewUser = async (event: any) => {
    event.preventDefault();
    const fieldsValidated = validateFields();
    if (!fieldsValidated) {
      console.error("Some fields are empty.");
      displayErrorMessage("Missing fields.");
      return;
    }
    const passwordsMatch = checkPasswordsMatch(userPassword, passwordToConfirm);
    if (!passwordsMatch) {
      console.error("Passwords must match");
      return;
    } else {
      const newUser = {
        email: emailAddress,
        name: displayName,
        password: passwordToConfirm,
      };

      const req = await fetch("http://localhost:3000/api/user/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      const res = await req.json();

      if (res.errorMessage) {
        displayErrorMessage(res.errorMessage);
      } else {
        displaySuccessMessage("Account created!");
        displaySuccessMessage("Please login.");
        clearFormFields();
      }
      return res;
    }
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
            onChange={handleDisplayNameChange}
          />
        </div>
        <div className={styles.formDiv}>
          <p>E-Mail Address:</p>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            placeholder="example@test.com"
            onChange={handleEmailChange}
          />
        </div>
        <div className={styles.formDiv}>
          <p>Password:</p>
          <input
            type="password"
            id="userPassword"
            name="userPassword"
            placeholder="******"
            onChange={handleUserPasswordChange}
          />
        </div>
        <div className={styles.formDiv}>
          <p>Confirm password:</p>
          <input
            type="password"
            id="userConfirmPassword"
            name="userConfirmPassword"
            placeholder="******"
            onChange={handlePasswordToConfirmChange}
          />
        </div>
        <div className={styles.formDiv} id="buttonDiv">
          <button id="createUserButton" type="button" onClick={submitNewUser}>
            Submit
          </button>
        </div>
        <div className={styles.errorDiv} id="errorDiv"></div>
        <div className={styles.successDiv} id="successDiv"></div>
      </form>
    </div>
  );
};

export default SignUpForm;
