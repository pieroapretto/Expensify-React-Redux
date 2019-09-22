import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseItem';
import selectExpenses from '../../selectors/expenses';

const ExpenseList = (props) => (
    <div>
       <h3>Expense List</h3>
       {props.expenses.map((expense) => {
           return <ExpenseListItem key={expense.id} {...expense}/>
       })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;