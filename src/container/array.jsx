import React from 'react';
import Container from './container.jsx'

export default class InputArray extends Container {
    constructor(args) {
        super(args);
        this.template = args.children;
        this.state    = { children: [] }
    }

    getValue() {
        let values = [];
        for (var name in this.inputs) {
            if (this.inputs.hasOwnProperty(name)) {
                values.push(this.inputs[name].getValue());
            }
        }
        return values;
    }

    clone(children) {
        return React.Children.map(children, child => {
            return React.cloneElement(child);
        });
    }

    render() {
        return <div className="container">
            { this.state.children }
            <a onClick={ e => {
                let children = this.state.children;
                let child = <Container children={this.clone(this.template)} form={this} name={children.length} />
                children.push(child);

                this.setState({children})  
            }}>Add</a>
        </div>
    }
}
