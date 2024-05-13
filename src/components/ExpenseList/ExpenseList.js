import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";

const ExpenseList = (props) => {
  const transactions = props.expenses;
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {/* Display transactions here */
          transactions.map((expense, index) => 
              <Transaction expense={expense} index={index} />
          )
        }
      </ul>
    </div>
  );
};

export default ExpenseList;
