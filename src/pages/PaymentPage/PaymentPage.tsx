import React, { FC, useEffect, useState } from "react";
import cn from "classnames";
import { Link, useParams } from "react-router-dom";
import { OrderResponseBody } from "@paypal/paypal-js/types";

import { Header, PaymentForm, Preloader } from "../../components";
// import { ReactComponent as ApplePayIcon } from "./icons/apple_pay.svg";
// import { ReactComponent as CreditCardIcon } from "./icons/credit_card.svg";
// import { ReactComponent as GooglePayIcon } from "./icons/google_pay.svg";
import { ReactComponent as SuccessIcon } from "./icons/success.svg";
import {
  getRecepient,
  saveTransaction,
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
  const [paid, setPaid] = useState(false);

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

  const handleApprove = (order?: OrderResponseBody) => {
    console.log("recipient.id ---> ", recipient?.id);
    if (recipient && order) {
      dispatch(
        saveTransaction({ recepientId: recipient.id, transaction: order })
      );
      setPaid(true);
    }
  };

  const handleError = (err: Record<string, unknown>) => {
    console.log("error ---> ", err);
  };

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
        <div
          className={cn(styles.body, {
            [styles.flex_body]: !paid,
          })}
        >
          {paid ? (
            <div className={styles.success}>
              <SuccessIcon width={"10rem"} height="10rem" />
              <span>Your payment was processed successfully</span>
            </div>
          ) : (
            <PaymentForm
              recipient={recipient}
              handleApprove={handleApprove}
              handleError={handleError}
            />
          )}
        </div>
      )}
      <div
        className={cn(styles.footer, {
          [styles.flex_footer]: paid,
        })}
      >
        <Link to="/app/payment">Contacts</Link>
        <Link to="/app/payment">Contract offer</Link>
        <Link to="/app/payment">
          Policy regarding the processing of personal data
        </Link>
      </div>
    </div>
  );
};
