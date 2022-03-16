import React, { FC } from "react";
import cn from "classnames";

import bank from "../../assets/images/deutsche_bank.png";
import { Avatar, Button, Counter, Header, StarRating } from "../../components";
import { ReactComponent as ApplePayIcon } from "./icons/apple_pay.svg";
import { ReactComponent as CreditCardIcon } from "./icons/credit_card.svg";
import { ReactComponent as GooglePayIcon } from "./icons/google_pay.svg";

import styles from "./PaymentPage.module.scss";
import { Link } from "react-router-dom";

interface PaymentPageProps {
  isInside?: boolean;
}

export const PaymentPage: FC<PaymentPageProps> = ({ isInside }) => {
  return (
    <div
      className={cn(styles.payment, {
        [styles.inside]: isInside,
      })}
    >
      <Header type="white" />
      <div className={styles.body}>
        <div className={styles.body_top}>
          <Avatar size="large" />
          <span>John Doe</span>
        </div>
        <h2 className={styles.title}>Leave a tip</h2>
        <Counter />
        <h3 className={styles.subtitle}>Rate Service</h3>
        <StarRating />
        <div className={styles.methods}>
          <Button type="ghost" className={styles.method_btn}>
            <ApplePayIcon />
          </Button>
          <Button type="ghost" className={styles.method_btn}>
            <GooglePayIcon />
          </Button>
          <Button type="ghost" className={styles.method_btn}>
            <CreditCardIcon />
          </Button>
        </div>
        <div className={styles.body_bottom}>
          <span>Payments go through</span>
          <img src={bank} alt="Deutsche Bank" />
        </div>
      </div>
      <div className={styles.footer}>
        <Link to="/app/payment">Contacts</Link>
        <Link to="/app/payment">Contract offer</Link>
        <Link to="/app/payment">
          Policy regarding the processing of personal data
        </Link>
      </div>
    </div>
  );
};
