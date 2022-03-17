import * as yup from "yup";

export const userSchema = yup
  .object({
    firstName: yup.string().required("Обязательное поле"),
    lastName: yup.string().required("Обязательное поле"),
    phone: yup.string().required("Обязательное поле"),
    email: yup.string().required("Обязательное поле"),
    city: yup.string().required("Обязательное поле"),
    company: yup.string().required("Обязательное поле"),
    password: yup
      .string()
      .required("Обязательное поле")
      .min(4, "Минимальная длина 4 символа"),
    confirm_password: yup
      .string()
      .required("Обязательное поле")
      .oneOf([yup.ref("password"), null], "Пароли должны совпадать"),
    accountType: yup.string().required("Обязательное поле"),
    access: yup.bool().required("Обязательное поле").oneOf([true]),
  })
  .required();
