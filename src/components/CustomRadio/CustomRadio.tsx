import React, {
  ChangeEvent,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
} from "react";
import cn from "classnames";

import styles from "./CustomRadio.module.scss";

interface CustomRadioProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string | number;
  name: string;
  id: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  labelClass?: string;
  checked?: boolean;
}

export const CustomRadio: FC<CustomRadioProps> = ({
  label,
  name,
  id,
  className,
  labelClass,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className={cn(styles.filter_box, className)}>
      <input
        type="radio"
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        {...props}
      />
      <label htmlFor={id} className={cn(styles.label, labelClass)}>
        <span>{label}</span>
      </label>
    </div>
  );
};
