// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // state.push(action.expense);             // Modifies the 'state' variable
            // return state.concat(action.expense);    // Doesn't modify the 'state' variable
            return [
                ...state,
                action.expense
            ];  // Doesn't modify the 'state' variable

        case 'REMOVE_EXPENSE':
            // return state.filter(({expense}) => (expense.id !== action.id));
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });

        case 'SET_EXPENSES':
            return action.expenses;

        default:
            return state;
    }
};
