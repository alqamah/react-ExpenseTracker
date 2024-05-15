import { useState, useReducer } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses]
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id)
      };
    }

    //add logic for updating the expense here
    case "EDIT_EXPENSE": {
      const temp_arr = state.expenses.filter((expense) => expense.id !== payload.expense.id);
      return {
        expenses: [payload.expense,...temp_arr]
      };
    }
    
    default:
      return state;
  }
};
// Use proper state management for populating the form in the expenseForm component on clicking the edit icon in the Transaction component
function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [editExpenseId, setEditExpenseId] = useState(null);
  const [editExpenseText, setEditExpenseText] = useState("");
  const [editExpenseAmount, setEditExpenseAmount] = useState("");

  const addExpense = (expense) => {
    if(editExpenseId){
      dispatch({ type: "EDIT_EXPENSE", payload: { expense } });
    }else{
      dispatch({ type: "ADD_EXPENSE", payload: { expense } });
    }
    //dispatch({ type: "ADD_EXPENSE", payload: { expense } });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
  };

  const editExpense = (id) => {
    setEditExpenseId(id);
    const expense = state.expenses.find((expense) => expense.id === id);
    if(expense){
      setEditExpenseText(expense.text);
      setEditExpenseAmount(expense.amount);
    }
  };
  const resetEditExpense = () => {
    setEditExpenseId(null);
    setEditExpenseText("");
    setEditExpenseAmount("");
  };
  
  
  // Add dispatch function for updation
  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm 
        addExpense={addExpense}
        // Pass the props for populating the form with expense text and amount
        editExpenseId={editExpenseId}
        editExpenseText={editExpenseText}
        editExpenseAmount={editExpenseAmount}
        resetEditExpense={resetEditExpense}
        />
        <div className="expenseContainer">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList
            expenses={state.expenses}
            deleteExpense={deleteExpense}
            // Pass props to update a transacation
            editExpense={editExpense}
          />
        </div>
      </div>
    </>
  );
}

export default App;
