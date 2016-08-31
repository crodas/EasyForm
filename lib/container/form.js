'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _microEvents = require('micro-events');

var _microEvents2 = _interopRequireDefault(_microEvents);

var _container = require('./container.jsx');

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormContainer = function (_Container) {
    _inherits(FormContainer, _Container);

    function FormContainer() {
        _classCallCheck(this, FormContainer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FormContainer).apply(this, arguments));
    }

    _createClass(FormContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.form._container = this;
        }
    }]);

    return FormContainer;
}(_container2.default);

FormContainer.contextTypes = {};

var Form = function (_EventEmitter) {
    _inherits(Form, _EventEmitter);

    function Form() {
        _classCallCheck(this, Form);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this));

        _this2.Container = function (args) {
            return _react2.default.createElement(FormContainer, _extends({}, args, { form: _this2 }));
        };
        return _this2;
    }

    _createClass(Form, [{
        key: '_emit',
        value: function _emit() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            GlobalEmitter.emit.apply(GlobalEmitter, args);
            this.emit.apply(this, args);
        }
    }, {
        key: 'setValues',
        value: function setValues(values) {
            return this._container.setValues(values);
        }
    }, {
        key: 'getValues',
        value: function getValues() {
            return this._container.getValue();
        }
    }, {
        key: '_doValidate',
        value: function _doValidate(input) {
            var value = input.getValue();
        }
    }]);

    return Form;
}(_microEvents2.default);

exports.default = Form;