'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _events = require('../events.jsx');

var _events2 = _interopRequireDefault(_events);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _base = require('./base.jsx');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Value(val) {
    if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === "object" && val.hasOwnProperty('value')) {
        return val.value;
    }
    return val;
}

function Label(val) {
    if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === "object" && val.hasOwnProperty('label')) {
        return val.label;
    }
    return val;
}

var Select = function (_InputBase) {
    _inherits(Select, _InputBase);

    function Select() {
        _classCallCheck(this, Select);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Select).apply(this, arguments));
    }

    _createClass(Select, [{
        key: 'validate',
        value: function validate() {
            var value = this.getValue();
            if (value && this.props.values.indexOf(value)) {
                throw new Error("Invalid value");
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var values = _props.values;
            var value = _props.value;

            var props = _objectWithoutProperties(_props, ['values', 'value']);

            if (!this.getValue() && values.length > 0 && Value(values[0])) {
                setTimeout(function () {
                    if (!_this2.getValue()) {
                        _this2._setValue(Value(values[0]));
                    }
                }, 1);
            }
            return _react2.default.createElement(
                'select',
                _extends({}, props, { value: this.getValue(), onChange: function onChange(e) {
                        return _this2._setValue(e.target.value);
                    } }),
                values.map(function (option) {
                    return _react2.default.createElement(
                        'option',
                        { key: Value(option), value: Value(option) },
                        Label(option)
                    );
                })
            );
        }
    }]);

    return Select;
}(_base2.default);

exports.default = Select;

var SelectFilter = function (_Select) {
    _inherits(SelectFilter, _Select);

    function SelectFilter() {
        _classCallCheck(this, SelectFilter);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SelectFilter).apply(this, arguments));
    }

    _createClass(SelectFilter, [{
        key: 'doFilter',
        value: function doFilter(text, values) {
            return values.filter(function (m) {
                return text.length === 0 || Label(m).indexOf(text) !== -1;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props2 = this.props;
            var values = _props2.values;

            var props = _objectWithoutProperties(_props2, ['values']);

            var filter = this.state.filter || '';
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement('input', _extends({}, props, { type: 'text', value: this.state.filter || '', onChange: function onChange(e) {
                            return _this4.setState({ filter: e.target.value });
                        } }))
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'select',
                        _extends({}, props, { size: '4', onChange: function onChange(e) {
                                return _this4._setValue(e.target.value);
                            } }),
                        this.doFilter(filter, values || []).map(function (option) {
                            return _react2.default.createElement(
                                'option',
                                { key: Value(option), value: Value(option) },
                                Label(option)
                            );
                        })
                    )
                ),
                _react2.default.createElement('div', null)
            );
        }
    }]);

    return SelectFilter;
}(Select);

Select.propTypes = SelectFilter.propTypes = {
    values: _react2.default.PropTypes.array.isRequired
};