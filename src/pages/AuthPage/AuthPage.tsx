import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./AuthPage.module.scss";
import { Button, TextField } from "../../components";
import { useForm } from "react-hook-form";
import { IAuthField } from "../../models/User";
import { authSchema } from "../../utils/validators/user";
import { yupResolver } from "@hookform/resolvers/yup";

interface AuthFields {
  email: string;
  password: string;
}

interface AuthPageProps {
  login: (email: string, password: string) => void;
}

const authFields: IAuthField[] = [
  {
    placeholder: "sample@mail.com",
    legend: "Email",
    type: "email",
    fieldName: "email",
  },
  {
    legend: "Password",
    type: "password",
    fieldName: "password",
  },
];

export const AuthPage: FC<AuthPageProps> = ({ login }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthFields>({
    resolver: yupResolver(authSchema),
  });

  const navigate = useNavigate();

  const goToRegisterPage = () => {
    navigate("/register");
  };

  return (
    <form className={styles.content}>
      <h1 className={styles.title}>Log in</h1>
      <div className={styles.form}>
        {authFields.map((field) => (
          <TextField {...field} key={field.legend} />
        ))}
      </div>
      <div className={styles.footer}>
        <Button type="submit">Log in</Button>
        <Button onClick={goToRegisterPage} appearance="ghost">
          Registration
        </Button>
      </div>
    </form>
  );
};
