import React from 'react';

export default class Base extends React.Component {
    constructor(args) {
        super(args);
        this.state = {};
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

