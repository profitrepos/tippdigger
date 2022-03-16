import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";

import styles from "./Radio.module.scss";

interface RadioProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string | number;
  name: string;
  id: string;
}

export const Radio: FC<RadioProps> = ({
  label,
  name,
  className,
  id,
  ...props
}) => {
  return (
    <div className={cn(styles.radio_box, className)}>
      <input type="radio" name={name} id={id} {...props} />
      <label htmlFor={id} className={styles.label}>
        <span className={styles.circle} />
        <span className={styles.label_text}>{label}</span>
      </label>
    </div>
  );
};
