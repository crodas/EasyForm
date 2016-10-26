import React from 'react';
import Container from './container';
import Context from '../context';
import {toArray, Random, Stateless} from '../utils';
import {get, scope, getCurrentScope} from './global';

export default class ArrayContainer extends Container {
    static propTypes = {
        id: React.PropTypes.string.isRequired
    };
    static clone = function(name) {
        if (arguments.length > 1) {
            name = arguments[1];
        }
        try {
            get(name).addBlock();
        } catch (e) {
            return currentScope.findElement(name).addBlock();
        }
    };

    static remove = (ev) => {
        getCurrentScope().parent.removeBlock(getCurrentScope().id);
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

        setTimeout(() => {
            inputs = toArray(this.inputs);
            for (let i = 0; i < values.length; ++i) {
                inputs[i].setValues(values[i]);
            }
        });

    }

    clone(children, id) {
        return React.Children.map(children, child => {
            let props = {};
            let children = [];
            for (var i in child.props) {
                props[i] = child.props[i];
                if (typeof child.props[i] === 'function') {
                    props[i] = scope(child.props[i], id);
                }
                if (i === 'children' && typeof props[i] === 'object') {
                    props[i] = this.clone(props[i], id);
                }
            }

            return React.cloneElement(child, props);
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

        children[id] = <Container key={id} id={id} children={this.clone(this.template, id)} name={this.id + "_" + id} />

        this.setState({children})  
    }

    render() {
        return <Stateless className="reform container repetitive">
            {toArray(this.state.children)}
        </Stateless>
    }
}

