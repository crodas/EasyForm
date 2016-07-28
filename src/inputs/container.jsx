import React from 'react';
import Form from '../form.jsx';
import InputBase from './base.jsx';

export default class Container extends React.Component {
    constructor(args) {
        super(args);
        if (!(this.props.form instanceof Container) && !(this.props.form instanceof Form)) {
            throw new Error("The input must be inside of a form/container");
        }
        if (this.props.form instanceof Container) {
            this.props.form.registerField(this.props.name, this);
        }
        this.inputs = {};
    }

    registerField(name, value) {
        this.inputs[name] = value;
    } 

    getValue() {
        let values ={};
        for (var name in this.inputs) {
            if (this.inputs.hasOwnProperty(name)) {
                values[name] = this.inputs[name].getValue();
            }
        }
        return values;
    }

    validate() {
        let errors = [];
        for (let name in this.inputs) {
            if (this.inputs.hasOwnProperty(name)) {
                let input = this.inputs[name];
                let value = input.getValue();
                let validator;
                try {
                    validator = 'internal';
                    input.validate();
                    for (let key in input.props) {
                        if (input.props.hasOwnProperty(key) && ['string', 'boolean'].indexOf(typeof input.props[key]) !== -1) {
                            validator = `${key}.${input.props[key]}`;
                            this._emit(validator, value, input);
                        }
                    }
                } catch (e) {
                    errors.push({ name, value, message: e.message, validator });
                }
            }
        }
        return errors;
    }


    setValues(values) {
        for (let key in values) {
            if (values.hasOwnProperty(key) && this.inputs[key]) {
                this.inputs[key].setState({value: values[key]});
            }
        }
        return this;
    }


    attachElements(element) {
        if (element.props && element.props.children) {
            return React.cloneElement(element, {
                children: this.attachElements(element.props.children),
                form: this,
            })
        }

        if (element instanceof Array) {
            return element.map( child => {
                return this.attachElements(child)
            });
        }
        
        if (element.type.prototype instanceof InputBase || element.type.prototype instanceof Container) {
            return React.cloneElement(element, {
                form: this,
            });
        }

        return element;
    }

    render() {
        return <div>{this.attachElements(this.props.children || [])}</div>
    }
}
