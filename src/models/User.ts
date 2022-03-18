import { HTMLInputTypeAttribute } from "react";

export interface IUser {
  id: string;
  balance: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  company: string;
  accountType: "administrator" | "tip_recipient";
  rating: number;
  access: boolean;
}

export interface IRegistrationForm extends Required<IUser> {
  password: string;
  confirm_password: string;
  access: boolean;
}

export interface IAuthField {
  legend: string;
  maxLength?: number;
  fieldName: keyof IRegistrationForm;
  type?: HTMLInputTypeAttribute;
  masked?: boolean;
  mask?: string;
  placeholder?: string;
}

export interface AuthForm {
  email: string;
  password: string;
}
