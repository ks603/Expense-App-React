import React from 'react';
import { connect } from 'react-redux'
import Expenseform from './ExpenseForm'
import { addExpense } from '../actions/expenses'


const AddExpensePage = (props) => (
  <div>
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Add Expense</h1>
      </div>
    </div>
    <div className="content-container">
      <Expenseform
        onSubmit={(expense) => {
          props.dispatch(addExpense(expense))
          props.history.push('/')
        }}
      />
    </div>
  </div>
);

export default connect()(AddExpensePage)
