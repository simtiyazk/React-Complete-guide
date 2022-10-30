import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Cards";
import './ExpenseItem.css';
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2019');

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredYearLists = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  });

  let expenseContent = <p>No expenses found</p>

  if(filteredYearLists.length > 0) {
    expenseContent = filteredYearLists.map((expense) => (
    <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))
  }

    return (
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
        {/* Conditional render Using ternary operator */}
        {/* {filteredYearLists.length === 0 ? 
          <p>No expenses found</p> : 
          filteredYearLists.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))} */
        }


        {/* Conditional render Using && operator */}
        {/* {filteredYearLists.length === 0 && <p>No expenses found</p>} */}
        {/* {filteredYearLists.length > 0 && 
        filteredYearLists.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))} */
        }

        {/* {Render using if condition} */}
        {expenseContent}
        
      </Card>
    )
}

export default Expenses;