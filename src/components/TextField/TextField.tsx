import React, {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  useState,
} from "react";
import cn from "classnames";
import MaskInput from "react-maskinput";

import styles from "./TextField.module.scss";
import { ReactComponent as ClearIcon } from "./icons/clear.svg";
import { ReactComponent as PasswordIcon } from "./icons/password.svg";

interface TextFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  legend: string;

  type?: HTMLInputTypeAttribute;
  maxlength?: number;
  placeholder?: string;
  masked?: boolean;
  mask?: string;
}

export const TextField: FC<TextFieldProps> = ({
  className,
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

export const MaskedTextField: FC<TextFieldProps> = ({
  className,
  legend,
  placeholder,
  mask,
  type,
  masked,
  ...props
}) => {
  const clearInput = () => {
    console.log("clearInput");
  };

  return (
    <div className={cn(styles.input_box, className)}>
      <MaskInput
        mask={mask}
        maskChar="_"
        //@ts-ignore
        placeholder={placeholder}
        {...props}
      />
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>{legend}</legend>
      </fieldset>
      <button onClick={clearInput} className={styles.icon_btn}>
        <ClearIcon />
      </button>
    </div>
  );
};
