import React from "react";
import styles from "./ExpenseInfo.module.css";
import { useState } from "react";

export default function ExpenseInfo(props) {

  const [expenses, setExpenses] = useState(props.expenses);
  //console.log(expenses);
  let profit=0,loss=0,total=0;
  for(let i=0;i<expenses.length;i++){
    if(expenses[i].amount>0){
      profit+=expenses[i].amount;
    }else{
      loss+=expenses[i].amount;
    }
  }
  loss = loss*-1;
  total=profit-loss; 
  console.log(total);


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
  }

