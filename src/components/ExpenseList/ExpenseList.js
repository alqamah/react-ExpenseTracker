import React from "react";
import styles from "./ExpenseList.module.css";
import { useState } from "react";
import styled from "styled-components";

const Amt = styled.p`
  color: ${(props) => (props.a > 0 ? "green" : "red")};
`;

export default function ExpenseList(props) {
  return (
    <div className={styles.expenseListContainer}>
      <h3>Transactions</h3>
      <ul className={styles.transactionList} >
        {/* Display transactions here */
        props.tx.map((tx, index)=>
          <li key={index}>{tx.title}<Amt a={tx.amount}>{tx.amount>0?"+":""}{tx.amount}</Amt></li>
        )}
      </ul>
    </div>
  );
}

