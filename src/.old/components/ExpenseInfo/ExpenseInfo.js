import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {
  // Add logic here to calculate the grand total, profit and expense amount here
  let profit=0, loss=0, total=0;
  props.expenses.map((expense) => {
    if (expense.amount > 0) {
      profit += Number(expense.amount);
    } else {
      loss += Number(expense.amount);
    }
    total += Number(expense.amount);
  });

  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>${total}</h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${profit}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${loss}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
