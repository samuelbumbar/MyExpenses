import moment from "moment";

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        // const betweenDates = moment(expense.createdAt).isBetween(startDate, endDate, day);
        const startDateMatch = startDate ? startDate.isSameOrBefore(moment(expense.createdAt), 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(moment(expense.createdAt), 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => { // it must return 1 or -1
        if (sortBy === 'date') // most recent expeses will be on top
            return a.createdAt < b.createdAt ? 1 : -1;
        if (sortBy === 'amount') // most expensive expeses will be on top
            return a.amount < b.amount ? 1 : -1;
    });
};