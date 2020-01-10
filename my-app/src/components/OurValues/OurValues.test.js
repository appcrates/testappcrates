import React from 'react';
import { shallow } from 'enzyme';
import OurValues from './OurValues';

describe('<OurValues />', () => {
  test('renders', () => {
    const wrapper = shallow(<OurValues />);
    expect(wrapper).toMatchSnapshot();
  });
});
