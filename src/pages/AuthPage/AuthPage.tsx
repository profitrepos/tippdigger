import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./AuthPage.module.scss";
import { Button, TextField } from "../../components";

const authFields = [
  {
    placeholder: "sample@mail.com",
    legend: "Email",
    maxLength: 100,
    type: "email",
  },
  {
    legend: "Password",
    maxLength: 100,
    type: "password",
  },
];

export const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Log in</h1>
      <div className={styles.form}>
        {authFields.map((field) => (
          <TextField {...field} key={field.legend} />
        ))}
      </div>
      <div className={styles.footer}>
        <Button onClick={() => navigate("/register")}>Log in</Button>
        <Button onClick={() => navigate("/register")} appearance="ghost">
          Registration
        </Button>
      </div>
    </div>
  );
};
