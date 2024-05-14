import { useState, useReducer, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

function App() {
  // Remove the useState hook and replace it with useReducer hook
  //const [expenses, setExpenses] = useState([]); 

  // Reducer Function and useReducer initialization
  // useEffect(()=>{
  //   console.log("AppExpenseArray",expenses);
  // })

  const expenseReducer = (state, action) => {
    switch (action.type){
      case "ADD":{
        //console.log("adding  expense. Payload:",action.payload);
        return [...state, action.payload];
      }
      case "REMOVE":{
        //console.log("removing expense, ID =", action.index);
        return state.filter((expense) => expense.id !== action.index);
      }
      default:
        return [];
    }
  }
  const [expenses, dispatch] = useReducer(expenseReducer, []);

  //functions to handle addExpense and deleteExpense
  const addExpense = (expense) => {
    dispatch({
      type: "ADD",
      payload: expense,
    });
  };
  const deleteExpense = (index) => {
    dispatch({
      type: "REMOVE",
      index: index
    });
  };


  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm addExpense={addExpense}/>
        <div className="expenseContainer">
          <ExpenseInfo expenses={expenses} />
          <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        </div>
      </div>
    </>
  );
}

export default App;
