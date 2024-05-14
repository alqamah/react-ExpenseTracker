import { useRef, useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = (props) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();

  const [transaction, setTransaction] = useState({title: "", amount: 0});

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Logic to add expense
    setTransaction({title: expenseTextInput.current.value, amount: expenseAmountInput.current.value});
    //console.log(transaction);
    props.addExpenseHandler(transaction);
    expenseTextInput.current.value = "";
    expenseAmountInput.current.value = "";    
    expenseTextInput.current.focus();
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>Add new transaction</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        ref = {expenseTextInput}
        placeholder="Enter text..."
        onChange={e => setTransaction({...transaction, title: e.target.value})}
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
        ref = {expenseAmountInput}
        placeholder="Enter amount..."
        onChange={e => setTransaction({...transaction, amount: e.target.value})}
        required
      />
      <button className={styles.submitBtn}>Add Transaction</button>
    </form>
  );
};

export default ExpenseForm;
