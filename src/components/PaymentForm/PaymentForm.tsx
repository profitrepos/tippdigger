import React, { FC, useState } from "react";
import { OrderResponseBody } from "@paypal/paypal-js/types";

import { Avatar } from "../Avatar/Avatar";
import { Counter } from "../Counter/Counter";
import { PaymentButtons } from "../PaymentButtons/PaymentButtons";
import { StarRating } from "../StarRating/StarRating";

import styles from "./PaymentForm.module.scss";
import bank from "../../assets/images/deutsche_bank.png";
import { IUser } from "../../models/User";

interface PaymentFormProps {
  recipient: IUser;
  handleApprove: (order?: OrderResponseBody) => void;
  handleError: (err: Record<string, unknown>) => void;
}

export const PaymentForm: FC<PaymentFormProps> = ({
  recipient,
  handleApprove,
  handleError,
}) => {
  const [amount, setAmount] = useState(15);

  return (
    <>
      <div className={styles.body_top}>
        <Avatar size="large" />
        <span>{`${recipient.firstName} ${recipient.lastName}`}</span>
      </div>
      <h2 className={styles.title}>Leave a tip</h2>
      <Counter value={amount} setValue={setAmount} />
      <h3 className={styles.subtitle}>Rate Service</h3>
      <StarRating className={styles.rating} />
      {/* <div className={styles.methods}>
            <Button appearance="ghost" className={styles.method_btn}>
              <ApplePayIcon />
            </Button>
            <Button appearance="ghost" className={styles.method_btn}>
              <GooglePayIcon />
            </Button>
            <Button appearance="ghost" className={styles.method_btn}>
              <CreditCardIcon />
            </Button>
          </div> */}
      <PaymentButtons
        amount={String(amount)}
        description={recipient.firstName}
        handleApprove={handleApprove}
        handleError={handleError}
      />
      <div className={styles.body_bottom}>
        <span>Payments go through</span>
        <img src={bank} alt="Deutsche Bank" />
      </div>
    </>
  );
};
