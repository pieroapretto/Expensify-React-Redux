import React from 'react';
import ExpenseForm from './AddExpenseForm';
import { addExpense } from '../../actions/expenses';
import { connect } from 'react-redux';

const expenseDashboardPage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/');
                console.log(expense);
            }}
        />
    </div>
);

export default connect()(expenseDashboardPage);