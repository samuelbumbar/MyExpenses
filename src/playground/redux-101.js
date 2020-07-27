import { createStore, bindActionCreators } from 'redux';

// Action generators - functions that return action objects

// Example
// Simple Option
// const add = (data) => (data.a + data.b);

// Destructured Options
// const add = ({ a, b }) => (a + b);
const add = ({ a, b }, c) => (a + b + c);

// console.log(add({ a: 1, b: 12 }));
console.log(add({ a: 1, b: 12 }, 100));



// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

// Using destructuring
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

// Example:
// let a = 10;w
// const add = (b) => (a+b);   // Not pure function

// const add = (a, b) => (a+b);// Pure function

const countReducer = (state = { count: 0 }, action) => {  // 'state' is similar to the call previousState
switch (action.type) {
    case 'INCREMENT':
        // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
            count: state.count + action.incrementBy
        };
    case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
        return {
            count: state.count - decrementBy
        };
    case 'RESET':
        return {
            count: 0
        }
    case 'SET':
        return {
            count: action.count
        }
    default:
        return state;
}
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();

// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch(incrementCount());

// store.dispatch({
//     type: "RESET"
// });

store.dispatch(resetCount());

// store.dispatch({
//     type: 'DECREMENT'
// });

store.dispatch(decrementCount());

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//     type: 'SET',
//     count: 101
// });

store.dispatch(setCount({ count: 101 }));