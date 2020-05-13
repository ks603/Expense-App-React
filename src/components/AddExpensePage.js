import React from 'react';
import Expenseform from './ExpenseForm'


const AddExpensePage = () => (
  <div>
    <h1>Add Expense</h1>
    <Expenseform 
      onSubmit={(expense) => {
        console.log(expense)
      }}
    />
  </div>
);

export default AddExpensePage;
