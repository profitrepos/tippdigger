import React, { SyntheticEvent, useState } from "react";
import MaskInput from "react-input-mask";

import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as MinusIcon } from "./icons/minus.svg";

import styles from "./Counter.module.scss";
import { Button } from "../Button/Button";
import { CustomRadio } from "../CustomRadio/CustomRadio";

const values = [10, 15, 20, 25, 30];

export const Counter = () => {
  const [count, setCount] = useState(15);

  const onChange = (e: SyntheticEvent<Element, Event>) => {
    //@ts-ignore
    setCount(Number(e.target.value));
  };

  const increase = () => {
    setCount((prev) => prev + 5);
  };

  const decrease = () => {
    setCount((prev) => {
      if (prev <= 0) {
        return 0;
      }
      return prev - 5;
    });
  };

  return (
    <div className={styles.counter}>
      <div className={styles.counter_top}>
        <Button className={styles.btn} onClick={increase}>
          <PlusIcon />
        </Button>
        <MaskInput
          //@ts-ignore
          className={styles.input}
          mask="** €"
          onChange={onChange}
          value={String(count)}
          alwaysShowMask
        />
        <Button className={styles.btn} onClick={decrease}>
          <MinusIcon />
        </Button>
      </div>
      <div className={styles.counter_bottom}>
        {values.map((val) => {
          return (
            <CustomRadio
              label={val}
              id={val.toString()}
              key={val}
              name="values"
              className={styles.radio_item}
              labelClass={styles.label}
              value={val}
              onChange={onChange}
              defaultChecked={val === count}
            />
          );
        })}
      </div>
    </div>
  );
};
