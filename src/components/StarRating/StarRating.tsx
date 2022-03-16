import React from "react";
import Rating from "react-rating";
import cn from "classnames";

import { ReactComponent as StarIcon } from "./icons/star.svg";
import styles from "./StarRating.module.scss";

export const StarRating = () => {
  return (
    <div className={styles.rating}>
      <Rating
        emptySymbol={<StarIcon className={styles.icon} />}
        fullSymbol={<StarIcon className={cn(styles.icon, styles.checked)} />}
      />
    </div>
  );
};
