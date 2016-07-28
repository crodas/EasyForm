import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Form from '../src/index.jsx'

describe('<Form />', () => {
    it('renders the inputs', () => {
        let form = new Form;
        const wrapper = shallow(<div><form.Input name="foo" /></div>);
        console.error(wrapper);
    });
});
