import React from 'react';
import Container from './container.jsx';
import Context from '../context.jsx';
import {toArray, Random} from '../utils.jsx';

export default class ArrayContainer extends Container {
    constructor(args) {
        super(args);
        this.groupid  = Random();
        this.template = args.children;
        this.state    = { children: {} }
        this.props.add(() => {
            this.addBlock();
        });
        this.props.remove(e => {
            let node = e.target;

            while (node) {
                if (node.id === this.groupid) {
                    break;
                }
                node = node.parentNode;
            }

            if (!node) {
                throw new Error("Remove group has been called outside of a cloned group");
            }

            this.removeBlock(node.getAttribute('name'));
        });
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

        children[id] = <Container key={id} children={this.clone(this.template, id)} form={this} name={id} id={this.groupid} />

        this.setState({children})  
    }

    render() {
        return <div className="container">
            { toArray(this.state.children) }
        </div>
    }
}

