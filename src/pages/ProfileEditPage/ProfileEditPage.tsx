import React, { HTMLInputTypeAttribute } from "react";
import { Avatar, Button, MaskedTextField, TextField } from "../../components";

import styles from "./ProfileEditPage.module.scss";

interface IRegisterFields {
  placeholder?: string;
  legend: string;
  maxLength: number;
  type?: HTMLInputTypeAttribute;
  masked?: boolean;
  mask?: string;
}

const profileFields: IRegisterFields[] = [
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

export const ProfileEditPage = () => {
  return (
    <div className={styles.edit}>
      <h1 className={styles.title}>Edit info</h1>
      <div className={styles.avatar_box}>
        <Avatar size="large" isEdit />
      </div>
      {profileFields.map((field) => {
        if (field.masked) {
          return <MaskedTextField {...field} key={field.legend} />;
        } else {
          return <TextField {...field} key={field.legend} />;
        }
      })}
      <div className={styles.footer}>
        <Button type="ghost">Cancel</Button>
        <Button>Safe</Button>
      </div>
    </div>
  );
};
