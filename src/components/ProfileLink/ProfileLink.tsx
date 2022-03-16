import React, { FC, FunctionComponent, SVGProps } from "react";
import { Link, LinkProps } from "react-router-dom";

import { ReactComponent as ArrowIcon } from "./icons/arrow_r.svg";
import styles from "./ProfileLink.module.scss";

interface ProfileLinkProps extends LinkProps {
  Icon: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  title: string;
  to: string;
}

export const ProfileLink: FC<ProfileLinkProps> = ({
  title,
  Icon,
  ...props
}) => {
  return (
    <Link {...props} className={styles.link}>
      <Icon />
      <span>{title}</span>
      <ArrowIcon />
    </Link>
  );
};
