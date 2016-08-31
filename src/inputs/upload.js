import Global from '../events';
import React from 'react';
import InputBase from './base';
import 'whatwg-fetch';

class FileUpload extends FileBase {
    render() {
        return <input {...this.props}
            type="file"
            onChange={event => this._setValue(event.target.value)}
        />
    }
}

Global.on("register.input", form => {
    form.register('FileUpload', FileUpload);
});
