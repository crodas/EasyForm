'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _events = require('../events.jsx');

var _events2 = _interopRequireDefault(_events);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _base = require('./base.jsx');

var _base2 = _interopRequireDefault(_base);

require('whatwg-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileUpload = function (_FileBase) {
    _inherits(FileUpload, _FileBase);

    function FileUpload() {
        _classCallCheck(this, FileUpload);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FileUpload).apply(this, arguments));
    }

    _createClass(FileUpload, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('input', _extends({}, this.props, {
                type: 'file',
                onChange: function onChange(event) {
                    return _this2._setValue(event.target.value);
                }
            }));
        }
    }]);

    return FileUpload;
}(FileBase);

_events2.default.on("register.input", function (form) {
    form.register('FileUpload', FileUpload);
});