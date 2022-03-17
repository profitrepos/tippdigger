export interface IRegistrationForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  company: string;
  password: string;
  confirm_password: string;
  accountType: "administrator" | "tip_recipient";
  access: boolean;
}
