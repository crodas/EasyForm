import React from 'react';
import Container from './container.jsx';

export default class Base extends React.Component {
    constructor(args) {
        super(args);
        this.state = {};
        if (!(this.props.form instanceof Container)) {
            throw new Error("The input must be inside of a form/container");
        }
        this.props.form.registerField(this.props.name, this);
    }
    _setValue(value) {
        this.setState({value});
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(value);
        }
    }
    validate() {
    }
    getValue() {
        return this.state.value || this.props.value || '';
    }
}

