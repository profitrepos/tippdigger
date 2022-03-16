import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";

import styles from "./FilterItem.module.scss";

interface FilterItemProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  name: string;
  id: string;
}

export const FilterItem: FC<FilterItemProps> = ({
  label,
  name,
  id,
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.filter_box, className)}>
      <input type="radio" name={name} id={id} />
      <label htmlFor={id} className={styles.label}>
        <span>{label}</span>
      </label>
    </div>
  );
};
