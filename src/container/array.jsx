import React from 'react';
import Container from './container.jsx';
import Context from '../context.jsx';
import {toArray, Random} from '../utils.jsx';

class Children extends Container {
    removeBlock() {
        this.context.container.removeBlock(this.props.name);
    }
}

class ArrayControl extends Context {
    constructor(args) {
        super(args);
        this.state = { children : [] };
    }
    overrideOnClick(children) {
        return React.Children.map(children, child => {
            if (!child.props) return child;
            if (child.props.onClick) {
                let onClick = ev => {
                    child.props.onClick(ev, () => {
                        this.action();
                    });
                };

                return React.cloneElement(child, {onClick});
            }

            if (child.props.children) {
                return React.cloneElement(children, {
                    children: this.overrideOnClick(child.props.children)
                });
            }

            return child;
        }); 
    }
    getGroup(name) {
        let candidate = name ? this.context.container.findElement(name) : this.context.container;

        if (!(candidate instanceof this.type)) {
            throw new Error("Container element is not a dynamic Group");
        }

        return candidate;
    }
    componentDidMount() {
        this.group    = this.getGroup(this.props.name);
        this.setState({ children: this.overrideOnClick(this.props.children) });
    }
}

export class clone extends ArrayControl {
    type = ArrayContainer;
    action() {
        this.group.addBlock();
    }
    render() {
        return <div>
            {this.state.children}
        </div>
    }
}

export class remove extends ArrayControl {
    type = Children;
    action() {
        this.group.removeBlock();
    }
    render() {
        return <div>
            {this.state.children}
        </div>
    }
}

export class ArrayContainer extends Container {
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

        children[id] = <Children key={id} children={this.clone(this.template, id)} form={this} name={id} />

        this.setState({children})  
    }

    render() {
        return <div className="container">
            { toArray(this.state.children) }
        </div>
    }
}

