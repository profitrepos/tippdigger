import React, { FC, ReactNode } from "react";

import Footer from "./Footer/Footer";
import styles from "./layout.module.scss";

interface layoutProps {
  children: ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
