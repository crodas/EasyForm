import React from 'react';
import Container from './container.jsx';
import {toArray, Random} from '../utils.jsx';

export default class InputArray extends Container {
    constructor(args) {
        super(args);
        this.template = args.children;
        this.state    = { children: {} }
    }

    getValue() {
        return toArray(this.inputs).map(function(input) {
            return input.getValue();
        });
    }

    setValues(values) {
        if (!(values instanceof Array)) {
            throw new Error(`Expecting array of values for ${this.props.name}`);
        }

        let inputs = toArray(this.inputs);

        for (let i = 0; i < values.length - inputs.length; ++i) {
            this.addBlock();
        }

        inputs = toArray(this.inputs);
        for (let i = 0; i < values.length; ++i) {
            inputs[i].setValues(values[i]);
        }

    }

    clone(children, id) {
        return React.Children.map(children, child => {
            let args = {key: Random()};
            if (child.props['remove-group']) {
                args = { onClick: (e) => {
                    if (typeof child.props.onClick === 'function') {
                        child.props.onClick(e);
                    }
                    this['remove-group'](id);
                }};
            }
            return React.cloneElement(child, args);
        });
    }

    removeBlock(id) {
        let children = this.state.children;
        delete children[id];

        this.setState({children})  
    }

    addBlock() {
        let children = this.state.children;
        let id = Random();

        children[id] = <Container key={id} children={this.clone(this.template, id)} form={this} name={id} />

        this.setState({children})  
    }

    render() {
        return <div className="container">
            { toArray(this.state.children) }
        </div>
    }
}

