import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Form, {Group, Input, Select} from '../src/index';

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
        expect(mount(<XForm />).find('div,stateless,reform,form').length).toBe(0);
    });
    
    it("renders only an input, not wrapper", () => {
        let XForm = new Form;
        let form = mount(<XForm><Input name="foobar" /></XForm>);
        expect(form.find('div,reform,form,stateless').length).toBe(0);
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


    it("renders select properly", () => {
        let XForm = new Form;
        let form = mount(<XForm>
            <Select name="foobar" values={[{value: "foo", label: "Foo"}, {value: "bar", label: "Bar"}]} />
        </XForm>);

        expect(form.find('select').length).toBe(1);
        expect(form.find('select[name="foobar"]').length).toBe(1);
        expect(form.find('select[name="foobar"]').get(0).value).toBe('foo');

        XForm.setValues({ foobar : 'bar' });
        expect(form.find('select[name="foobar"]').get(0).value).toBe('bar');

        form.find('select[name="foobar"]').simulate('change', {target: { value: 'foo' }});
        expect(form.find('select[name="foobar"]').get(0).value).toBe('foo');
    });

    it("populates (early) groups properly", () => {
        let XForm = new Form;
        XForm.setValues({ group: { input: 'hi'}});

        let form = mount(<XForm>
            <Group name="group">
                <Input name="input" />
            </Group>
        </XForm>);


        expect(form.find('input').get(0).value).toBe('hi');
    });

    it("populates groups properly", () => {
        let XForm = new Form;

        let form = mount(<XForm>
            <Group name="group">
                <Input name="input" />
            </Group>
        </XForm>);


        expect(form.find('input').get(0).value).toBe('');

        XForm.setValues({ group: { input: 'hi'}});
        expect(form.find('input').get(0).value).toBe('hi');
    });

    it("fails with two containers with same ID", () => {
        expect(() => {
            let XForm = new Form;
            let form = mount(<XForm>
                <Group id="foobar" name="foobar">
                    <Input name="input" />
                </Group>
                <Group id="foobar" name="barfoo">
                    <Input name="input" />
                </Group>
            </XForm>);

        }).toThrow(new Error("Container with id=foobar already exists in the document"));
    });

});
