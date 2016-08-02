import React from 'react';
import EventEmitter from 'micro-events';
import Container from './container.jsx';

export default class Form extends EventEmitter {
    constructor() {
        super();
        this.Container = (args) => {
            return this._container = new Container(args);
        };
        this.Container.childContextTypes = {
            form: React.PropTypes.objectOf(Container)
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

