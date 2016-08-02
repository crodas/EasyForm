import React from 'react';
import Container from '../container/container.jsx';

export default class Base extends React.Component {
    static contextTypes = {
        container: React.PropTypes.object.isRequired
    };
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

