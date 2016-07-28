import React from 'react';
import EventEmitter from 'micro-events';
import Container from './inputs/container.jsx';
export default class Form extends EventEmitter {
    constructor() {
        super();
        this.Container = () => {
            return this._container = new Container({ form: this })
        };
    }

    _emit(...args) {
        GlobalEmitter.emit.apply(GlobalEmitter, args);
        this.emit.apply(this, args);
    }

    getValues() {
        return this._container.getValue();
    }

    _doValidate(input) {
        let value = input.getValue();
    }

}

