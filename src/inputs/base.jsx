import React from 'react';
import Container from '../container/container.jsx';

export default class Base extends React.Component {
    static contextTypes = {
        form: React.PropTypes.objectOf(Container)
    };
    constructor(args) {
        super(args);
        this.state = {};
    }
    componentDidMount() {
        if (!(this.context.form instanceof Container)) {
            throw new Error("The input must be inside of a form/container");
        }
        this.context.form.registerField(this.props.name, this);
    }
    componentWillUnmount() {
        this.context.form.removeField(this.props.name);
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

