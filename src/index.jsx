import React from 'react';
import GlobalEmitter from './events.jsx';
import EventEmitter from 'micro-events';
import './input.jsx';

class Form extends EventEmitter {
    constructor() {
        super();
        this.inputs = {};
        this._emit('register.input', this);
    }

    _emit(...args) {
        GlobalEmitter.emit.apply(GlobalEmitter, args);
        this.emit.apply(this, args);
    }

    register(name, Input) {
        this[name] = (args) => {
            let input = new Input(args);
            this.inputs[args.name] = input;
            return input;
        };
        this[name].propTypes = Object.assign(
            {name: React.PropTypes.string.isRequired},
            Input.propTypes || {}
        );
    }

    setValues(values) {
        for (let key in values) {
            if (values.hasOwnProperty(key) && this.inputs[key]) {
                this.inputs[key].setState({value: values[key]});
            }
        }
        return this;
    }

    _doValidate(input) {
        let value = input.getValue();
        console.error(value);
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

    getValues() {
        let values ={};
        for (var name in this.inputs) {
            if (this.inputs.hasOwnProperty(name)) {
                values[name] = this.inputs[name].getValue();
            }
        }
        return values;
    }
}

export {Form, Form as default, GlobalEmitter as Extend};
