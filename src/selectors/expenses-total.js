// Get total cost for the expeneses
export default (expenses = []) => (
  // Using only reduce
  // expenses.reduce((total, expense) => total + expense.amount, 0)

  // Using map and reduce
  expenses
    .map((expense) => expense.amount)
    .reduce((total, amount) => total + amount, 0)
);