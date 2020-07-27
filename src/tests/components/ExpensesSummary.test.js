import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={777} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={7} expensesTotal={114195} />);
  expect(wrapper).toMatchSnapshot();
});

// test('should render ExpensesSummary with one expense', () => {
//   const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} />);
//   expect(wrapper).toMatchSnapshot();
// });

// test('should render ExpensesSummary with multiple expenses', () => {
//   const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
//   expect(wrapper).toMatchSnapshot();
// });