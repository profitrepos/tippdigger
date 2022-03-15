import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  type?: "primary" | "ghost";
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  type = "primary",
  ...props
}) => {
  return (
    <button
      className={cn(styles.btn, className, {
        [styles.primary]: type === "primary",
        [styles.ghost]: type === "ghost",
      })}
      {...props}
    >
      {children}
    </button>
  );
};
