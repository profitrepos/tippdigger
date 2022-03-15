import React, { FC, HTMLInputTypeAttribute } from "react";

import styles from "./RegisterPage.module.scss";
import {
  Button,
  Checkbox,
  MaskedTextField,
  Radio,
  TextField,
} from "../../components";

interface RegisterPageProps {
  setIsAuth: (value: boolean) => void;
}

interface IRegisterFields {
  placeholder?: string;
  legend: string;
  maxLength: number;
  type?: HTMLInputTypeAttribute;
  masked?: boolean;
  mask?: string;
}

const registerFields: IRegisterFields[] = [
  {
    placeholder: "John",
    legend: "First Name",
    maxLength: 100,
  },
  {
    placeholder: "Doe",
    legend: "Last name",
    maxLength: 100,
  },
  {
    placeholder: "+49 777 000 00 00",
    legend: "Phone number",
    maxLength: 13,
    type: "number",
    masked: true,
    mask: "+00 000 000 00 00",
  },
  {
    placeholder: "sample@mail.com",
    legend: "Email",
    maxLength: 100,
    type: "email",
  },
  {
    placeholder: "Berlin",
    legend: "City",
    maxLength: 100,
  },
  {
    placeholder: "“Google”",
    legend: "Company",
    maxLength: 100,
  },
  {
    legend: "Password",
    maxLength: 100,
    type: "password",
  },
  {
    legend: "Repeat password",
    maxLength: 100,
    type: "password",
  },
];

export const RegisterPage: FC<RegisterPageProps> = ({ setIsAuth }) => {
  const handleRegister = () => {
    setIsAuth(true);
  };

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Registration</h1>
      {registerFields.map((field) => {
        if (field.masked) {
          return <MaskedTextField {...field} key={field.legend} />;
        } else {
          return <TextField {...field} key={field.legend} />;
        }
      })}
      <div className={styles.account_type}>
        <Radio
          label="Tip recipient"
          name="account_type"
          id="recipient"
          className={styles.radio}
        />
        <Radio
          label="Administrator"
          name="account_type"
          id="administrator"
          className={styles.radio}
        />
      </div>
      <div className={styles.personal_data}>
        <Checkbox
          id="personal_data"
          text="I have read the Consent to the processing of personal data and the policy regarding the processing of personal data. The decision of the “V” mark means my written consent to the terms of these documents and my agreement to comply with them."
        />
      </div>
      <Button onClick={handleRegister}>Continue</Button>
    </div>
  );
};
