import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

import {CounterComponent} from "./CounterComponent";
const props = {
    value: 0,
    onIncreaseClick: jest.fn(),
};

describe('Counter component', () => {
    it('should render dom', () => {
        const wrapper = shallow(<CounterComponent {...props}/>);
        expect(wrapper.find('span').exists()).toBeTruthy();
    })
});