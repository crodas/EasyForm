import React from 'react';
import EventEmitter from 'micro-events';
import Container from './container';


class FormContainer extends Container {
    static contextTypes = {};

    componentDidMount() {
        this.props.form._container = this;
        if (this.props.values) {
            this.props.form._container.setValues(this.props.values);
        }
    }
}

export default class Form extends EventEmitter {
    constructor() {
        super();
        this._values = {};
        this.Container = (args) => {
            return <FormContainer {...args} form={this} values={this._values} />
        };
    }

    _emit(...args) {
        GlobalEmitter.emit.apply(GlobalEmitter, args);
        this.emit.apply(this, args);
    }

    setValues(values) {
        if (this._container) {
            this._container.setValues(values);
        } else {
            this._values = Object.assign({}, this._values, values);
        }
        return this;
    }

    getValues() {
        return this._container.getValue();
    }

    _doValidate(input) {
        let value = input.getValue();
    }

}

