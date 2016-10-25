import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Form, {Input} from '../src/index';

class Form1 extends React.Component {
    constructor(args) {
        super(args);
        this.form = new Form;
    }
    getValues() {
        return this.form.getValues();
    }
    render() {
        return <this.form>
            <Input name="foobar" />
        </this.form>
    }
}

describe("Form suite", () => {
    it("renders bare form", () => {
        let XForm = new Form;
        expect(mount(<XForm />).find('div,reform,form').length).toBe(0);

    });
    
    it("renders only an input, not wrapper", () => {
        let XForm = new Form;
        let form = mount(<XForm><Input name="foobar" /></XForm>);
        expect(form.find('div,reform,form').length).toBe(0);
        expect(form.find('input').length).toBe(1);
    });

    it("renders propertly and get the values", () => {
        let form = mount(<Form1 />);
        expect(form.find('input').length).toBe(1);
        expect(form.find('input[name="foobar"]').length).toBe(1);
        let foobar = "x:" + Math.random();
        form.find('input').simulate('change', {target: {value: foobar}});

        expect(form.get(0).getValues()).toEqual({foobar});
    });

});
