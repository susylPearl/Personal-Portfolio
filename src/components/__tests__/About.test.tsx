import React from 'react';
import { shallow } from 'enzyme';
import { About } from '../About';
import resumeMockData from '../__mockData__/resumeMockData.json';

test('About component should render correctly', () => {
    const about = shallow(<About {...resumeMockData} />);
    expect(about.find('p').first().text()).toEqual('software developer');
    expect(about).toMatchSnapshot();
})
