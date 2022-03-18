import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./AuthPage.module.scss";
import { Button, TextField } from "../../components";
import { useForm } from "react-hook-form";
import { AuthForm, IAuthField } from "../../models/User";
import { authSchema } from "../../utils/validators/user";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppSelector } from "../../hooks/redux";
import { selectUserLoading } from "../../store/user/userSlice";

interface AuthPageProps {
  login: (formData: AuthForm) => void;
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
    formState: { errors },
  } = useForm<AuthForm>({
    resolver: yupResolver(authSchema),
  });

  const navigate = useNavigate();

  const userLoading = useAppSelector(selectUserLoading);

  const goToRegisterPage = () => {
    navigate("/register");
  };

  const onSubmit = (data: AuthForm) => {
    login(data);
  };

  return (
    <form className={styles.content} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.title}>Log in</h1>
      <div className={styles.form}>
        {authFields.map((field) => (
          <TextField
            {...field}
            key={field.legend}
            //@ts-ignore
            {...register(field.fieldName)}
            //@ts-ignore
            error={errors[field.fieldName]}
          />
        ))}
      </div>
      <div className={styles.footer}>
        <Button type="submit" disabled={userLoading}>
          {userLoading ? "Loading..." : "Log in"}
        </Button>
        <Button onClick={goToRegisterPage} appearance="ghost">
          Registration
        </Button>
      </div>
    </form>
  );
};
