import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashbordPage from '../../components/ExpenseDashbordPage';

test('should render ExpenseDashbordPage correctly', () => {
    const wrapper = shallow(<ExpenseDashbordPage />);
    expect(wrapper).toMatchSnapshot();
});