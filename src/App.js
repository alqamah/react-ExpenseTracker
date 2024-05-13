import "./App.css";
import React from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
export default class App extends React.Component {
  // Create state for the expenses here
  constructor(){
    super();
    this.state = {
      expenses: [
        {
          title: "Rent",
          amount: -1000
        },
        {
          title: "Income",
          amount: 150
        },
        {
          title: "Coffee",
          amount: -150
        },
        {
          title: "Coffee",
          amount: -150
        }
      ]
    }
  }

  render() {
    return (
      <>
        <h2 className="mainHeading">Expense Tracker</h2>
        <div className="App">
          {/* Render expense form here */}
          <ExpenseForm onTxSubmit={(tx) => {
            console.log("Transaction Added:",tx);
            this.setState({
              expenses: [...this.state.expenses, tx]
            })
          }} />
          <div className="expenseContainer">
            {/* Render Expense Info here
            Render Expense List here */}
            <ExpenseInfo/>
            <ExpenseList tx={this.state.expenses}/>
            
          </div>
        </div>
      </>
    );
  }
}
