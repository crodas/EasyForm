import React from 'react';
import Context from '../context';

export default class Base extends Context {
    constructor(args) {
        super(args);
        this.state = {};
    }
    componentDidMount() {
        this.context.container.registerField(this.props.name, this);
    }
    componentWillUnmount() {
        this.context.container.removeField(this.props.name);
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

