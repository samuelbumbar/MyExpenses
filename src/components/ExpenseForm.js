import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

// const date = new Date();
const now = moment();
console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        e.persist();    // if we want to use 'e' inside of a callback we have to call this function first
        this.setState(() => ({ note: e.target.value }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
            this.setState(() => ({ amount }));
    };
    onDateChange = (createdAt) => {
        if (createdAt)  // This prevents the user from being able to clear the value
            this.setState(() => ({ createdAt }));
        // else    // If the date value is cleared, go back to the current date
        //     this.setState(() => ({ createdAt: moment() }));
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            // Set error state equal to 'Please provide description and amount.'
            this.setState(() => ({ error: 'Please provide description and amount.' }));
        } else {
            // Clear the error
            this.setState(() => ({ error: '' }));

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
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    className="text-input"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    type="text"
                    placeholder="Amount"
                    className="text-input"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    date={this.state.createdAt}             // sets where the date value is get from
                    onDateChange={this.onDateChange}        // sets the handler when setting a new value to the calendar
                    focused={this.state.calendarFocused}    // checks if the calendar should be displayed
                    onFocusChange={this.onFocusChange}      // changes the focus value if it changes
                    numberOfMonths={1}                      // sets the number of months to be displayed at the same time
                    isOutsideRange={(day) => false}         // disables the selected day verification
                />
                <textarea
                    placeholder="Add a note for your expense (optional)"
                    className="textarea"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                />
                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
        );
    }
};
