import React from 'react';
import Form from './form';
import {Random, Stateless} from '../utils';
import {deregister,register} from './global';

export default class Container extends React.Component {
    static childContextTypes = {
        container: React.PropTypes.object.isRequired
    };

    static contextTypes = {
        container: React.PropTypes.object.isRequired
    };

    constructor(args) {
        super(args);
        this.inputs = {};
        this.state  = {};
        this.id     = this.props.id || Random();
    }

    getChildContext() {
        return {container: this};
    }

    removeField(name) {
        this.state[name] = this.inputs[name].getValue();
        delete this.inputs[name];
    }

    registerField(name, value) {
        this.inputs[name] = value;
        value.parent = this;
        if (this.state[name]) {
            value.setValues(this.state[name]);
        }
    }

    findElement(name) {
        if (!this.inputs[name]) {
            return this.context.findElement(name);
        }

        return this.inputs[name];
    };

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
                if (this.inputs[key] instanceof Container) {
                    this.inputs[key].setValues(values[key]);
                } else {
                    this.inputs[key]._setValue(values[key]);
                }
            }
        }
        return this;
    }

    componentDidMount() {
        register(this);
        this.context.container.registerField(this.props.name, this);
    }

    componentWillUnmount() {
        deregister(this);
        if (this.context.container) {
            this.context.container.removeField(this.props.name);
        }
    }

    render() {
        return <Stateless className="reform container" id={this.props.id}>
            {this.props.children}
        </Stateless>
    }
}
