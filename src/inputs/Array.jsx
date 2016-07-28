import React from 'react';
import Container from './container.jsx'

export default class InputArray extends Container {
    constructor(args) {
        super(args);
        console.error('array', this.props.form);
    }
}
