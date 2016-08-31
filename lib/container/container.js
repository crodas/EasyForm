'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _form = require('./form.jsx');

var _form2 = _interopRequireDefault(_form);

var _utils = require('../utils.jsx');

var _global = require('./global.jsx');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
    _inherits(Container, _React$Component);

    function Container(args) {
        _classCallCheck(this, Container);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Container).call(this, args));

        _this.inputs = {};
        _this.state = {};
        _this.id = _this.props.id || (0, _utils.Random)();
        (0, _global.register)(_this);
        return _this;
    }

    _createClass(Container, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return { container: this };
        }
    }, {
        key: 'removeField',
        value: function removeField(name) {
            this.state[name] = this.inputs[name].getValue();
            delete this.inputs[name];
        }
    }, {
        key: 'registerField',
        value: function registerField(name, value) {
            this.inputs[name] = value;
            if (this.state[name]) {
                value.setState({ value: this.state[name] });
            }
        }
    }, {
        key: 'findElement',
        value: function findElement(name) {
            if (!this.inputs[name]) {
                return this.context.findElement(name);
            }

            return this.inputs[name];
        }
    }, {
        key: 'getValue',
        value: function getValue() {
            var values = {};
            for (var name in this.inputs) {
                if (this.inputs.hasOwnProperty(name)) {
                    values[name] = this.inputs[name].getValue();
                }
            }
            return values;
        }
    }, {
        key: 'validate',
        value: function validate() {
            var errors = [];
            for (var name in this.inputs) {
                if (this.inputs.hasOwnProperty(name)) {
                    var input = this.inputs[name];
                    var value = input.getValue();
                    var validator = void 0;
                    try {
                        validator = 'internal';
                        input.validate();
                        for (var key in input.props) {
                            if (input.props.hasOwnProperty(key) && ['string', 'boolean'].indexOf(_typeof(input.props[key])) !== -1) {
                                validator = key + '.' + input.props[key];
                                this._emit(validator, value, input);
                            }
                        }
                    } catch (e) {
                        errors.push({ name: name, value: value, message: e.message, validator: validator });
                    }
                }
            }
            return errors;
        }
    }, {
        key: 'setValues',
        value: function setValues(values) {
            for (var key in values) {
                if (values.hasOwnProperty(key) && this.inputs[key]) {
                    if (this.inputs[key] instanceof Container) {
                        this.inputs[key].setValues(values[key]);
                    } else {
                        this.inputs[key]._setValue(values[key]);
                    }
                }
            }
            return this;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.context.container.registerField(this.props.name, this);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.context.container.removeField(this.props.name);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: this.props.className || '', id: this.id },
                this.props.children
            );
        }
    }]);

    return Container;
}(_react2.default.Component);

Container.childContextTypes = {
    container: _react2.default.PropTypes.object.isRequired
};
Container.contextTypes = {
    container: _react2.default.PropTypes.object.isRequired
};
exports.default = Container;