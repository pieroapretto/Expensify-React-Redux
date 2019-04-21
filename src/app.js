import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: '90', createdAt: '1'}));
store.dispatch(addExpense({ description: 'Gas bill', amount: '35', createdAt: '4'}));
store.dispatch(addExpense({ description: 'Rent', amount: '600', createdAt: '3'}));
store.dispatch(addExpense({ description: 'Netflix', amount: '12', createdAt: '5'}));
store.dispatch(addExpense({ description: 'phone bill', amount: '70', createdAt: '2'}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
