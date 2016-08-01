import React from 'react';
import InputBase from './base.jsx';
import Dropzone from 'react-dropzone';

export default class DropzoneInput extends InputBase {
    constructor(args) {
        super(args);
        this.state = { files: [] };
    }
    clone(children, file, index) {
        return React.Children.map(children, (child) => {
            if (!child.type) {
                return child;
            }
            if (child.props['set-url']) {
                let props = {};
                props['set-url'] = undefined;
                props[child.props['set-url']] = file.preview;
                return React.cloneElement(child, props, );
            }

            if ((child.props||{}).children) {
                return React.cloneElement(child, {
                    children: this.clone(child.props.children, file, index)
                });
            }

            if (child.props.remove) {
                return React.cloneElement(child, {
                    onClick: (e) => {
                        this.state.files.splice(index, 1);
                        this.setState({files: this.state.files });
                        if (typeof child.props.onClick === 'function') {
                            child.props.onClick(e);
                        }
                    },
                });
            }

            return child;
        });
    }
    getPreviews() {
        return this.state.files.map((file, index) => {
            return this.clone(this.props.children, file, index);
        });
    }
    render() {
        let children = this.getPreviews();
        if (this.props.multiple === false && this.state.files.length > 0) {
            return <div>{children}</div>;
        }
        return <div>
            <Dropzone onDrop={ files => {
                this._setValue(files);
                this.setState({files});
            }} accept={this.props.accept || ''}>
                <div>
                    {this.props.placeholder  || 'Try dropping some files here, or click to select files to upload.'}
                </div>
            </Dropzone>
        </div>
    } 
}
