import React from 'react';
import { shallow } from 'enzyme';
import MyHeader from './myHeader';

describe('<MyHeader />', () => {
  test('renders', () => {
    const wrapper = shallow(<MyHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
