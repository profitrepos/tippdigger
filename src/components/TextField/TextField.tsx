import React, {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  useState,
} from "react";
import cn from "classnames";

import styles from "./TextField.module.scss";
import { ReactComponent as ClearIcon } from "./icons/clear.svg";
import { ReactComponent as PasswordIcon } from "./icons/password.svg";

interface TextFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  rightIcon?: JSX.Element;
  type?: HTMLInputTypeAttribute;
  maxlength?: number;
  placeholder?: string;
  legend: string;
}

export const TextField: FC<TextFieldProps> = ({
  className,
  rightIcon,
  type = "text",
  placeholder,
  legend,
  maxlength,
  ...props
}) => {
  const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(type);

  const clearInput = () => {
    console.log("clear");
  };

  const togglePassword = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <div className={cn(styles.input_box, className)}>
      <input
        {...props}
        placeholder={placeholder}
        security={"isPassword"}
        type={inputType}
        maxLength={maxlength}
      />
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{legend}</legend>
      </fieldset>
      {type === "password" ? (
        <button onClick={togglePassword} className={styles.icon_btn}>
          <PasswordIcon />
        </button>
      ) : (
        <button onClick={clearInput} className={styles.icon_btn}>
          <ClearIcon />
        </button>
      )}
    </div>
  );
};
