import React from "react";
import { Avatar, Button, MaskedTextField, TextField } from "../../components";
import { IAuthField } from "../../models/User";

import styles from "./ProfileEditPage.module.scss";

const profileFields: IAuthField[] = [
  {
    placeholder: "John",
    legend: "First Name",
    maxLength: 100,
    fieldName: "firstName",
  },
  {
    placeholder: "Doe",
    legend: "Last name",
    maxLength: 100,
    fieldName: "lastName",
  },
  {
    placeholder: "+49 777 000 00 00",
    legend: "Phone number",
    maxLength: 13,
    type: "number",
    masked: true,
    mask: "+00 000 000 00 00",
    fieldName: "phone",
  },
  {
    placeholder: "sample@mail.com",
    legend: "Email",
    maxLength: 100,
    type: "email",
    fieldName: "email",
  },
  {
    placeholder: "Berlin",
    legend: "City",
    maxLength: 100,
    fieldName: "city",
  },
  {
    placeholder: "“Google”",
    legend: "Company",
    maxLength: 100,
    fieldName: "company",
  },
  {
    legend: "Password",
    maxLength: 100,
    type: "password",
    fieldName: "password",
  },
  {
    legend: "Repeat password",
    maxLength: 100,
    type: "password",
    fieldName: "confirm_password",
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
        <Button appearance="ghost">Cancel</Button>
        <Button>Safe</Button>
      </div>
    </div>
  );
};
