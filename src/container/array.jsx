import React from 'react';
import Container from './container.jsx'
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

    clone(children, id) {
        return React.Children.map(children, child => {
            let args = {key: Random()};
            if (child.props.removeBlock) {
                args = { onClick: (e) => {
                    if (typeof child.props.onClick === 'function') {
                        child.props.onClick(e);
                    }
                    this.removeBlock(id);
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
            <button className="btn" onClick={e=> this.addBlock()}>Add block</button>
            { toArray(this.state.children) }
        </div>
    }
}
