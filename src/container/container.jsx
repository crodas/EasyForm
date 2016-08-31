import React from 'react';
import Form from './form.jsx';
import {Random} from '../utils.jsx';
import {register} from './global.jsx';


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
        register(this);
    }

    getChildContext() {
        return { container: this };
    }

    removeField(name) {
        this.state[name] = this.inputs[name].getValue();
        delete this.inputs[name];
    }

    registerField(name, value) {
        this.inputs[name] = value;
        if (this.state[name]) {
            value.setState({value: this.state[name]});
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
        this.context.container.registerField(this.props.name, this);
    }

    componentWillUnmount() {
        this.context.container.removeField(this.props.name);
    }

    render() {
        return <div className={this.props.className||''} id={this.id}>
            {this.props.children}
        </div>
    }
}
