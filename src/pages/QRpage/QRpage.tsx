import React from "react";
import { Link } from "react-router-dom";

import styles from "./QRpage.module.scss";
import { Avatar, Button, Header, ShadowBox } from "../../components";
import { ReactComponent as PencilIcon } from "./icons/pencil.svg";
import QR from "../../assets/images/qr.png";
import QRCode from "react-qr-code";

export const QRpage = () => {
  return (
    <div className={styles.qr}>
      <Header />
      <ShadowBox>
        <div className={styles.info}>
          <div className={styles.profile}>
            <Avatar className={styles.avatar} />
            <span>John Doe</span>
          </div>
          <Link to="/profile/edit" className={styles.icon}>
            <PencilIcon />
          </Link>
        </div>
        <div className={styles.balance}>
          Balance: <span>0</span>
        </div>
      </ShadowBox>
      <div className={styles.qr_box}>
        <h2 className={styles.title}>
          Your personal <span>QR code</span>
        </h2>
        <div className={styles.qr_code}>
          <QRCode value="hey" size={240} />
          <span>700-413-020</span>
        </div>
        <Link to="payment" className={styles.payment_link}>
          Go to payment page
        </Link>
        <Button className={styles.order_btn}>Order a print</Button>
        <p className={styles.printing_text}>
          Printing with delivery in your city: select a package (business card,
          sticker, etc.) for printing and you will receive ready-made materials.
        </p>
      </div>
    </div>
  );
};
