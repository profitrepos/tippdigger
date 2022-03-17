import React, { useState } from "react";
import cn from "classnames";

import styles from "./WithdrawalPage.module.scss";
import {
  Avatar,
  Button,
  Checkbox,
  Header,
  MaskedTextField,
  ShadowBox,
  TextField,
} from "../../components";
import purse from "../../assets/images/purse.png";
import { ReactComponent as ConditionalIcon } from "./icons/conditions.svg";
import { Link } from "react-router-dom";

export const WithdrawalPage = () => {
  const [isInternal, setIsInternal] = useState(false);

  const switchHandler = (value: boolean) => {
    setIsInternal(value);
  };

  return (
    <div className={styles.withdrawal}>
      <Header />
      <ShadowBox>
        <div className={styles.top_box}>
          <Avatar size="large" imgUrl={purse} />
          <div className={styles.balance}>
            <span className={styles.balance_title}>Your balance:</span>
            <span className={styles.balance_value}>15</span>
          </div>
        </div>
      </ShadowBox>
      <div className={styles.toggler}>
        <button
          className={cn(styles.toggler_item, {
            [styles.active]: !isInternal,
          })}
          onClick={() => switchHandler(false)}
        >
          Bank card
        </button>
        <button
          className={cn(styles.toggler_item, {
            [styles.active]: isInternal,
          })}
          onClick={() => switchHandler(true)}
        >
          Internal
        </button>
        <div
          className={cn(styles.slider, {
            [styles.slider_right]: isInternal,
            [styles.slider_left]: !isInternal,
          })}
        />
      </div>
      {isInternal ? <Internal /> : <BankCard />}
    </div>
  );
};

const BankCard = () => {
  return (
    <>
      <div className={styles.bank_card}>
        <div>
          <TextField
            legend="Transfer amount, €"
            placeholder="100"
            className={styles.input}
          />
          <MaskedTextField
            legend="Bank card number"
            placeholder="_ _ _ _ - _ _ _ _ - _ _ _ _ - _ _ _ _"
            mask="0000 0000 0000 0000"
            className={styles.input}
          />
        </div>
        <div className={styles.calculate}>
          <div className={styles.calculate_item}>
            <span>Amount to be transferred:</span>
            <span>0</span>
          </div>
          <div className={styles.calculate_item}>
            <span>Commission:</span>
            <span>0</span>
          </div>
        </div>
        <Link to="/withdrawal" className={styles.conditions}>
          <ConditionalIcon />
          <span>Conditions for withdrawing money</span>
        </Link>
        <Checkbox
          type="ghost"
          text="Remember card"
          id="remember_card"
          className={styles.checkbox}
        />
      </div>
      <Button className={styles.continue_btn}>Continue</Button>
    </>
  );
};

const Internal = () => {
  return (
    <>
      <div className={styles.internal}>
        <TextField
          legend="Transfer amount, €"
          placeholder="100"
          className={styles.input}
        />
        <TextField
          legend="User ID"
          placeholder="123456789"
          className={styles.input}
        />
      </div>
      <Button className={styles.continue_btn}>Continue</Button>
    </>
  );
};
