import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

test('should add expense with values', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '109',
      description: 'Laptop',
      note: '',
      amount: '29500',
      createdAt: 20000
    }
  };
  const state = expensesReducer(expenses, action);

  // expect(state).toContainEqual(action.expense);
  expect(state).toEqual([...expenses, action.expense]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should edit an expense', () => {
  const updates = {
    description: ''
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates
  };
  const state = expensesReducer(expenses, action);

  expect(state[1].description).toBe(updates.description);
});

test('should not edit an expense if not found', () => {
  const updates = {
    description: ''
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates
  };
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[1]]);
});
