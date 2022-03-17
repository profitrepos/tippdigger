import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  useState,
} from "react";
import cn from "classnames";
import MaskInput, { ReactInputMask } from "react-input-mask";
import { FieldError } from "react-hook-form";

import styles from "./TextField.module.scss";
import { ReactComponent as ClearIcon } from "./icons/clear.svg";
import { ReactComponent as PasswordIcon } from "./icons/password.svg";

interface TextFieldProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  legend: string;
  // delete ?
  fieldName?: string;
  setValue?: (fieldName: string, value: string) => void;
  error?: FieldError;
  //
  type?: HTMLInputTypeAttribute;
  maxlength?: number;
  placeholder?: string;
  masked?: boolean;
  mask?: string;
  showClearIcon?: boolean;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      type = "text",
      placeholder,
      legend,
      maxlength,
      showClearIcon,
      fieldName,
      error,
      setValue,
      ...props
    },
    ref
  ) => {
    const [inputType, setInputType] = useState<HTMLInputTypeAttribute>(type);

    const clearInput = () => {
      if (setValue && fieldName) {
        //TODO: убрать
        setValue(fieldName, "");
      }
    };

    const togglePassword = () => {
      if (inputType === "password") {
        setInputType("text");
      } else {
        setInputType("password");
      }
    };

    return (
      <div
        className={cn(styles.input_box, className, {
          [styles.error]: error,
        })}
      >
        <input
          {...props}
          placeholder={placeholder}
          security={"isPassword"}
          type={inputType}
          maxLength={maxlength}
          ref={ref}
        />
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>{legend}</legend>
        </fieldset>
        {type === "password" ? (
          <button onClick={togglePassword} className={styles.icon_btn}>
            <PasswordIcon />
          </button>
        ) : showClearIcon ? (
          <button onClick={clearInput} className={styles.icon_btn}>
            <ClearIcon />
          </button>
        ) : null}
        {error && <span className={styles.error_msg}>{error.message}</span>}
      </div>
    );
  }
);

export const MaskedTextField = React.forwardRef<ReactInputMask, TextFieldProps>(
  (
    {
      className,
      legend,
      placeholder,
      mask,
      type,
      masked,
      fieldName,
      showClearIcon,
      setValue,
      error,
      ...props
    },
    ref
  ) => {
    const clearInput = () => {
      if (setValue && fieldName) {
        //TODO: убрать
        setValue(fieldName, "");
      }
    };

    return (
      <div
        className={cn(styles.input_box, className, {
          [styles.error]: error,
        })}
      >
        <MaskInput
          mask={mask as string}
          placeholder={placeholder}
          {...props}
          ref={ref}
        />
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>{legend}</legend>
        </fieldset>
        {showClearIcon && (
          <button onClick={clearInput} className={styles.icon_btn}>
            <ClearIcon />
          </button>
        )}
      </div>
    );
  }
);
