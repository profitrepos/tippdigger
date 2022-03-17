import React, {
  DetailedHTMLProps,
  FC,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance?: "primary" | "ghost";
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  appearance = "primary",
  ...props
}) => {
  return (
    <button
      className={cn(styles.btn, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
