import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
  const result = selectExpensesTotal([expenses[0]]);
  // expect(result).toBe(expenses[0].amount);
  expect(result).toBe(195);
});

test('should correctly add up multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  // let sum = 0;
  // expenses.forEach((expense) => { sum += expense.amount });
  expect(result).toBe(114195);
});