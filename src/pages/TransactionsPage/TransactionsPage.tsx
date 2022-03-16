import React from "react";
import { FilterItem, Header, Transaction } from "../../components";

import styles from "./TransactionsPage.module.scss";

interface IFilterItem {
  label: string;
  id: string;
}
interface ITransactionsItem {
  type: "withdraw" | "receipt";
  time: string;
  sum: string | number;
  senderName?: string;
  id: string;
}

interface ITransactions {
  [key: string]: ITransactionsItem[];
}

const filters: IFilterItem[] = [
  {
    label: "Today",
    id: "today",
  },
  {
    label: "Yesterday",
    id: "yesterday",
  },
  {
    label: "Week",
    id: "week",
  },
  {
    label: "Month",
    id: "month",
  },
  {
    label: "Period",
    id: "period",
  },
];

const testTransactions: ITransactions = {
  Today: [
    {
      id: "1",
      type: "receipt",
      time: "11:10 PM",
      sum: 15,
      senderName: "KZ*1231",
    },
    {
      id: "2",
      type: "receipt",
      time: "10:10 PM",
      sum: 15,
      senderName: "John Doe",
    },
    {
      id: "3",
      type: "withdraw",
      time: "10:12 PM",
      sum: 20,
    },
    {
      id: "4",
      type: "receipt",
      time: "11:10 PM",
      sum: 15,
      senderName: "John Doe",
    },
  ],
  Yesterday: [
    {
      id: "5",
      type: "receipt",
      time: "14:10 PM",
      sum: 15,
      senderName: "KZ*1234",
    },
    {
      id: "6",
      type: "receipt",
      time: "10:16 PM",
      sum: 10,
      senderName: "John Doe",
    },
    {
      id: "7",
      type: "withdraw",
      time: "10:11 PM",
      sum: 20,
    },
    {
      id: "8",
      type: "receipt",
      time: "09:10 PM",
      sum: 15,
      senderName: "John Doe",
    },
  ],
};

export const TransactionsPage = () => {
  return (
    <div className={styles.transactions}>
      <Header />
      <h2 className={styles.title}>Transactions</h2>
      <div className={styles.filter}>
        {filters.map((filter) => {
          return (
            <FilterItem
              name="transactions"
              key={filter.id}
              {...filter}
              className={styles.filter_item}
            />
          );
        })}
      </div>
      {Object.keys(testTransactions).map((period) => {
        return (
          <div key={period} className={styles.period_box}>
            <span className={styles.period_title}>{period}</span>
            {testTransactions[period].map((transaction) => {
              return <Transaction key={transaction.id} {...transaction} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
