'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Select = exports.DropDown = exports.TextArea = exports.Group = exports.Input = exports.BaseInput = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _text = require('./inputs/text.jsx');

var _text2 = _interopRequireDefault(_text);

var _textarea = require('./inputs/textarea.jsx');

var _textarea2 = _interopRequireDefault(_textarea);

var _select = require('./inputs/select.jsx');

var _select2 = _interopRequireDefault(_select);

var _array = require('./container/array.jsx');

var _array2 = _interopRequireDefault(_array);

var _container = require('./container/container.jsx');

var _container2 = _interopRequireDefault(_container);

var _base = require('./inputs/base.jsx');

var _base2 = _interopRequireDefault(_base);

require('./validate.jsx');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Group(args) {
    if (args.multiple) {
        return _react2.default.createElement(_array2.default, args);
    }

    return _react2.default.createElement(_container2.default, args);
}

Group.add = _array2.default.clone;
Group.remove = _array2.default.remove;

exports.BaseInput = _base2.default;
exports.Input = _text2.default;
exports.Group = Group;
exports.TextArea = _textarea2.default;
exports.DropDown = _select2.default;
exports.Select = _select2.default;