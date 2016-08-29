import Global from '../events.jsx';
import React from 'react';
import InputBase from './base.jsx';

function Value(val) {
    if (typeof val === "object" && val.hasOwnProperty('value')) {
        return val.value;
    }
    return val;
}

function Label(val) {
    if (typeof val === "object" && val.hasOwnProperty('label')) {
        return val.label;
    }
    return val;
}

export default class Select extends InputBase {
    validate() {
        let value = this.getValue();
        if (value && this.props.values.indexOf(value)) {
            throw new Error("Invalid value");
        }
    }
    render() {
        let {values, value, ...props} = this.props;
        if (!this.getValue() && values.length > 0) {
            setTimeout(() => {
                this._setValue(Value(values[0]));
            });
        }
        return <select {...props} value={this.getValue()} onChange={e => this._setValue(e.target.value)}>
            {values.map(option => {
                return <option key={Value(option)} value={Value(option)}>{Label(option)}</option>;
            })}
        </select>
    }

}

class SelectFilter extends Select {
    doFilter(text, values) {
        return values.filter((m) => {
            return text.length === 0 || Label(m).indexOf(text) !== -1;
        });
    }
    render() {
        let {values, ...props} = this.props;
        let filter = this.state.filter || '';
        return <div>
            <div>
                <input {...props} type="text" value={this.state.filter || ''} onChange={e => this.setState({ filter: e.target.value }) } />
            </div>
            <div>
                <select {...props} size="4" onChange={e => this._setValue(e.target.value)}>
                {this.doFilter(filter, values||[]).map(option => {
                    return <option key={Value(option)} value={Value(option)}>{Label(option)}</option>;
                })}
                </select>
            </div>
            <div>
            </div>
        </div>
    }

}

Select.propTypes = SelectFilter.propTypes = {
    values: React.PropTypes.array.isRequired,
};

