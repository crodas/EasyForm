import Global from '../events.jsx';
import React from 'react';
import InputBase from './base.jsx';
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
