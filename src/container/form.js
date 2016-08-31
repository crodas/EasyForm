import React from 'react';
import EventEmitter from 'micro-events';
import Container from './container';


class FormContainer extends Container {
    static contextTypes = {};

    componentDidMount() {
        this.props.form._container = this;
    }
}

export default class Form extends EventEmitter {
    constructor() {
        super();
        this.Container = (args) => {
            return <FormContainer {...args} form={this} />
        };
    }

    _emit(...args) {
        GlobalEmitter.emit.apply(GlobalEmitter, args);
        this.emit.apply(this, args);
    }

    setValues(values) {
        return this._container.setValues(values);
    }

    getValues() {
        return this._container.getValue();
    }

    _doValidate(input) {
        let value = input.getValue();
    }

}

