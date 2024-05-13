import React from "react";
import styles from "./ExpenseForm.module.css";
import { useState } from "react";

export default function ExpenseForm({onTxSubmit}) {
  // Create state or ref for the inputs here
    const [tx, setTx] = useState({
      title: "",
      amount: 0,
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const title = e.target.elements.expenseText.value;
      const amount = e.target.elements.expenseAmount.value;
      setTx({ title, amount: Number(amount) });
      onTxSubmit({ title, amount: Number(amount) });
      e.target.reset();
    };

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>Add new transaction</h3>
        <label htmlFor="expenseText">Text</label>
        <input
          id="expenseText"
          className={styles.input}
          type="text"
          placeholder="Enter text..."
          required
        />
        <div>
          <label htmlFor="expenseAmount">Amount</label>
          <div>(negative - expense,positive-income)</div>
        </div>
        <input
          className={styles.input}
          id="expenseAmount"
          type="number"
          placeholder="Enter amount..."
          required
        />
        <button className={styles.submitBtn}>Add Transaction</button>
      </form>
    );
  }

