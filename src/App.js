import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Function to add an expense
  function addExpenseHandler(expenseData) {
    // Add expense to the state
    setExpenses((prevExpenses) => {
      return [expenseData,...prevExpenses];
    });
    console.log("added (app) ",expenseData);
  }

  // Create function to delete an expense
  function deleteExpense(index){
    console.log("delete (app) ",index);
    setExpenses((prevExpenses) => {
      return [
       ...prevExpenses.slice(0, index),
       ...prevExpenses.slice(index + 1)
      ];
    });
  }

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm addExpenseHandler={addExpenseHandler} />
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList deleteExpense={deleteExpense} expenses={expenses} />
        </div>
      </div>
    </>
  );
}

export default App;
