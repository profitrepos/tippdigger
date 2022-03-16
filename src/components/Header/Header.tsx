import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import cn from "classnames";

import { ReactComponent as GreenLogo } from "./icons/logo_green.svg";
import { ReactComponent as OrangeLogo } from "./icons/logo_orange.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type?: "green" | "white";
}

export const Header: FC<HeaderProps> = ({
  type = "green",
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.header, className)} {...props}>
      <div
        className={cn(styles.title, {
          [styles.green]: type === "green",
          [styles.white]: type === "white",
        })}
      >
        <Link to="/app" className={styles.logo_link}>
          {type === "green" ? <GreenLogo /> : <OrangeLogo />}
          <h1 className={styles.title_text}>
            <span>Tipp</span>
            <span>Digger</span>
          </h1>
        </Link>
      </div>
      <div className={styles.burger}>
        <span />
      </div>
    </div>
  );
};
