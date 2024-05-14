import React from "react";
import styles from "./ExpenseList.module.css";
import Transaction from "../Transaction/Transaction";
import { useState, useEffect } from "react";




const ExpenseList = (props) => {
  const [expenses, setExpenses] = useState([]);
  
  function handleDelete(index) {
    //console.log("delete", index);
    props.deleteExpense(index);
  }

  useEffect(()=>{
    setExpenses(props.expenses);
  });
  //using the state instead of props
  const transactions = expenses;
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList}>
        {/* Display transactions here */
          transactions.map((expense, index) => 
              <Transaction key={index} handleDelete={handleDelete} expense={expense} index={index} />
          )
        }
      </ul>
    </div>
  );
};

export default ExpenseList;
