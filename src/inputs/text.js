import React from 'react';
import InputBase from './base';

export default class Input extends InputBase {
    constructor(args) {
        super(args);
    }
    render() {
        let {type, ...props} = this.props;
        return <input 
            {...props}
            type={type || 'text'}
            value={this.getValue()}
            onChange={event => this._setValue(event.target.value) }
        />;
    }
}
