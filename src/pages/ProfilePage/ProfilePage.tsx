import React, { FC, FunctionComponent, SVGProps } from "react";
import { Link } from "react-router-dom";

import { Avatar, Header, ProfileInfo, ProfileLink } from "../../components";
import { ReactComponent as EditIcon } from "./icons/pencil.svg";
import { ReactComponent as ExitIcon } from "./icons/exit.svg";
import { ReactComponent as PhoneIcon } from "./icons/phone.svg";
import { ReactComponent as CompanyIcon } from "./icons/company.svg";
import { ReactComponent as GPSIcon } from "./icons/gps.svg";
import { ReactComponent as EmailIcon } from "./icons/email.svg";
import { ReactComponent as ContactIcon } from "./icons/contact.svg";
import { ReactComponent as OfferIcon } from "./icons/offer.svg";
import { ReactComponent as PersonalIcon } from "./icons/personal.svg";

import styles from "./ProfilePage.module.scss";

interface IProfileItem {
  Icon: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  title: string;
  value: string;
}

interface IProfileLink {
  Icon: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  title: string;
  to: string;
}

const profileInfoItems: IProfileItem[] = [
  {
    Icon: EmailIcon,
    title: "Email",
    value: "john@gmail.com",
  },
  {
    Icon: GPSIcon,
    title: "City",
    value: "Berlin",
  },
  {
    Icon: CompanyIcon,
    title: "Company",
    value: "My cafe LCC",
  },
  {
    Icon: PhoneIcon,
    title: "Phone",
    value: "+49 123 456 7891",
  },
];

const profileLinks: IProfileLink[] = [
  {
    Icon: ContactIcon,
    title: "Contacts",
    to: "/profile",
  },
  {
    Icon: OfferIcon,
    title: "Contract offer",
    to: "/profile",
  },
  {
    Icon: PersonalIcon,
    title: "Policy regarding the processing of personal data",
    to: "/profile",
  },
];

interface ProfilePageProps {
  logout: () => void;
}

export const ProfilePage: FC<ProfilePageProps> = ({ logout }) => {
  return (
    <div className={styles.profile}>
      <Header />
      <div className={styles.profile_head}>
        <div className={styles.left}>
          <Avatar size="large" />
          <span className={styles.name}>John Doe</span>
        </div>
        <div className={styles.right}>
          <Link to="edit">
            <EditIcon />
          </Link>
          <button className={styles.exit} onClick={logout}>
            <ExitIcon />
          </button>
        </div>
      </div>
      <div className={styles.info}>
        {profileInfoItems.map((item) => (
          <ProfileInfo key={item.title} {...item} />
        ))}
      </div>
      <div className={styles.links}>
        {profileLinks.map((link) => (
          <ProfileLink {...link} key={link.title} />
        ))}
      </div>
    </div>
  );
};
