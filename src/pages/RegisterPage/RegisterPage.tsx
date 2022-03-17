import React, { FC, HTMLInputTypeAttribute } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import styles from "./RegisterPage.module.scss";
import {
  Button,
  Checkbox,
  MaskedTextField,
  Radio,
  TextField,
} from "../../components";
import { IRegistrationForm } from "../../models/User";
import { Controller, useForm, useFormState } from "react-hook-form";
import { userSchema } from "../../utils/validators/user";

interface RegisterPageProps {
  setIsAuth: (value: boolean) => void;
}

interface IRegisterField {
  legend: string;
  maxLength?: number;
  fieldName: keyof IRegistrationForm;
  type?: HTMLInputTypeAttribute;
  masked?: boolean;
  mask?: string;
  placeholder?: string;
}

const registerFields: IRegisterField[] = [
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
    type: "number",
    masked: true,
    mask: "+99 999 999 99 99",
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

export const RegisterPage: FC<RegisterPageProps> = ({ setIsAuth }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    setValue,
    watch,
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(userSchema),
    defaultValues: {
      accountType: "tip_recipient",
      access: false,
      phone: "777555223301",
      lastName: "asdasdas",
    },
  });

  const onSubmit = (data: IRegistrationForm) => {
    console.log(data);
  };

  const resetValue = (fieldName: string) => {
    resetField(fieldName as keyof IRegistrationForm);
  };

  const setFieldValue = (fieldName: string, value: string) => {
    setValue(fieldName as keyof IRegistrationForm, value);
  };

  const values = watch();

  return (
    <form className={styles.content} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.title}>Registration</h1>
      {registerFields.map((input) => {
        if (input.masked) {
          return (
            <MaskedTextField
              key={input.fieldName}
              reset={resetValue}
              showClearIcon={Boolean(values[input.fieldName])}
              setValue={setFieldValue}
              error={errors[input.fieldName]}
              {...input}
              {...register(input.fieldName)}
            />
          );
        } else {
          return (
            <TextField
              key={input.fieldName}
              reset={resetValue}
              error={errors[input.fieldName]}
              showClearIcon={Boolean(values[input.fieldName])}
              {...input}
              {...register(input.fieldName)}
            />
          );
        }
      })}
      <div className={styles.account_type}>
        <Radio
          label="Tip recipient"
          // name="account_type"
          id="recipient"
          value="recipient"
          className={styles.radio}
          {...register("accountType")}
        />
        <Radio
          label="Administrator"
          // name="account_type"
          id="administrator"
          value="administrator"
          className={styles.radio}
          {...register("accountType")}
        />
      </div>
      <div className={styles.personal_data}>
        <Checkbox
          id="personal_data"
          text="I have read the Consent to the processing of personal data and the policy regarding the processing of personal data. The decision of the “V” mark means my written consent to the terms of these documents and my agreement to comply with them."
          {...register("access")}
        />
      </div>
      <Button type="submit" disabled={Object.keys(errors).length > 0}>
        Continue
      </Button>
    </form>
  );
};
