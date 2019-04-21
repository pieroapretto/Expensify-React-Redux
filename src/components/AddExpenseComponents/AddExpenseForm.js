import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calenderFocused: false,
        error: ''
    };
    handleDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    handleNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    handleAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,1000000}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused}));
    };
    onSubmit = (e) => {
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount.'}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
               description: this.state.description,
               amount: parseFloat(this.state.amount, 10) * 100,
               createdAt: this.state.createdAt.valueOf(),
               note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.handleDescriptionChange}
                        autoFocus
                    >
                    </input>
                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.handleAmountChange}
                    ></input>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        focused={this.state.calenderFocused}
                        onDateChange={this.onDateChange}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a comment to your expense (optional)"
                        value={this.state.note}
                        onChange={this.handleNoteChange}
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        );
    };
}