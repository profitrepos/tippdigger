import React, { FC, useEffect } from "react";
import cn from "classnames";
import { Link, useParams } from "react-router-dom";

import bank from "../../assets/images/deutsche_bank.png";
import {
  Avatar,
  Button,
  Counter,
  Header,
  Preloader,
  StarRating,
} from "../../components";
import { ReactComponent as ApplePayIcon } from "./icons/apple_pay.svg";
import { ReactComponent as CreditCardIcon } from "./icons/credit_card.svg";
import { ReactComponent as GooglePayIcon } from "./icons/google_pay.svg";
import {
  getRecepient,
  selectRecipientData,
  selectRecipientError,
  selectRecipientLoading,
} from "../../store/app/appSlice";

import styles from "./PaymentPage.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

interface PaymentPageProps {
  isInside?: boolean;
}

export const PaymentPage: FC<PaymentPageProps> = ({ isInside }) => {
  const recipient = useAppSelector(selectRecipientData);
  const recipientLoading = useAppSelector(selectRecipientLoading);
  const recipientError = useAppSelector(selectRecipientError);

  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getRecepient(id));
    }
  }, [dispatch, id]);

  if (recipientLoading) {
    return <Preloader />;
  }

  return (
    <div
      className={cn(styles.payment, {
        [styles.inside]: isInside,
      })}
    >
      <Header type="white" />
      {recipientError && <span className={styles.error}>{recipientError}</span>}
      {recipient && (
        <div className={styles.body}>
          <div className={styles.body_top}>
            <Avatar size="large" />
            <span>{`${recipient.firstName} ${recipient.lastName}`}</span>
          </div>
          <h2 className={styles.title}>Leave a tip</h2>
          <Counter />
          <h3 className={styles.subtitle}>Rate Service</h3>
          <StarRating />
          <div className={styles.methods}>
            <Button appearance="ghost" className={styles.method_btn}>
              <ApplePayIcon />
            </Button>
            <Button appearance="ghost" className={styles.method_btn}>
              <GooglePayIcon />
            </Button>
            <Button appearance="ghost" className={styles.method_btn}>
              <CreditCardIcon />
            </Button>
          </div>
          <div className={styles.body_bottom}>
            <span>Payments go through</span>
            <img src={bank} alt="Deutsche Bank" />
          </div>
        </div>
      )}
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
