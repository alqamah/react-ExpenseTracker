import React from "react";
import styles from "./ExpenseList.module.css";
import { useState } from "react";
import styled from "styled-components";

export default function ExpenseList(props) {

  const Title = styled.p`
  `;
  const Amt = styled.p`
    color: ${(props) => (props.a > 0 ? "green" : "red")};
  `;

    return (
      <div className={styles.expenseListContainer}>
        <h3>Transactions</h3>
        <ul className={styles.transactionList} >
          {/* Display transactions here */
          props.tx.map((tx, index)=>
            <li key={index}><Title>{tx.title}</Title><Amt a={tx.amount}>{tx.amount>0?"+":""}{tx.amount}</Amt></li>
          )}
        </ul>
      </div>
    );
  }

