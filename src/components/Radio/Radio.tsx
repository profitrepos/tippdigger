import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styles from "./Radio.module.scss";

interface RadioProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  name: string;
  id: string;
}

export const Radio: FC<RadioProps> = ({ label, name, id }) => {
  return (
    <div className={styles.radio_box}>
      <input type="radio" name={name} id={id} />
      <label htmlFor={id} className={styles.label}>
        <span className={styles.circle} />
        <span className={styles.label_text}>{label}</span>
      </label>
    </div>
  );
};
