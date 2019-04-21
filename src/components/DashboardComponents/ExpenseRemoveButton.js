import React from 'react';
import {removeExpense} from '../../actions/expenses';

export default (props, id) => (
    <div>
        <button onChange={(e) => {
            console.log(props,id);
            props.dispatch(removeExpense(id));
        }}>Remove</button>
    </div>
);