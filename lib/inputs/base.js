'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _context = require('../context.jsx');

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base = function (_Context) {
    _inherits(Base, _Context);

    function Base(args) {
        _classCallCheck(this, Base);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Base).call(this, args));

        _this.state = {};
        return _this;
    }

    _createClass(Base, [{
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
        key: '_setValue',
        value: function _setValue(value) {
            this.setState({ value: value });
            if (typeof this.props.onChange === 'function') {
                this.props.onChange(value);
            }
        }
    }, {
        key: 'validate',
        value: function validate() {}
    }, {
        key: 'getValue',
        value: function getValue() {
            return this.state.value || this.props.value || '';
        }
    }]);

    return Base;
}(_context2.default);

exports.default = Base;