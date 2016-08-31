import React from 'react';
import Container from './container.jsx';
import Context from '../context.jsx';
import {toArray, Random} from '../utils.jsx';
import {findWithDOM, get} from './global.jsx';

export default class ArrayContainer extends Container {
    static clone = (ev, name) => {
        let container = findWithDOM(ev.target);
        let array = container.findElement(name);

        array.addBlock();
    };
    static remove = (ev) => {
        let container = findWithDOM(ev.target);
        let [parentContainer, blockId] = container.props.name.split(/_/);
        get(parentContainer).removeBlock(blockId);
    }
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
            return React.cloneElement(child);
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

        children[id] = <Container key={id} children={this.clone(this.template, id)} name={this.id + "_" + id} />

        this.setState({children})  
    }

    render() {
        return <div className="container">
            { toArray(this.state.children) }
        </div>
    }
}

