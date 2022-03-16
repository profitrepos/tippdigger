import React, { FC, SVGProps } from "react";
import cn from "classnames";

import styles from "./Footer.module.scss";

import { ReactComponent as QRCodeIcon } from "./icons/qr.svg";
import { ReactComponent as WithDrawalIcon } from "./icons/withdrawal.svg";
import { ReactComponent as TransactionsIcon } from "./icons/transactions.svg";
import { ReactComponent as ProfileIcon } from "./icons/profile.svg";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

interface IFooterLink {
  title: string;
  Icon: FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
  navigateTo: string;
}

const links: IFooterLink[] = [
  {
    title: "QR Code",
    Icon: QRCodeIcon,
    navigateTo: "/app",
  },
  {
    title: "Withdrawal",
    Icon: WithDrawalIcon,
    navigateTo: "withdrawal",
  },
  {
    title: "Transactions",
    Icon: TransactionsIcon,
    navigateTo: "transactions",
  },
  {
    title: "Profile",
    Icon: ProfileIcon,
    navigateTo: "profile",
  },
];

const FooterLink: FC<IFooterLink> = ({ title, Icon, navigateTo }) => {
  let resolved = useResolvedPath(navigateTo);
  let match = useMatch({
    path: resolved.pathname,
    end: false,
  });

  return (
    <Link
      to={navigateTo}
      className={cn(styles.link, {
        [styles.active_link]: match,
      })}
    >
      <Icon className={styles.icon} />
      <span className={styles.link_title}>{title}</span>
    </Link>
  );
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      {links.map((link) => (
        <FooterLink {...link} key={link.title} />
      ))}
    </div>
  );
};

export default Footer;
