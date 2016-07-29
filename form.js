var EasyForm =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _events = __webpack_require__(1);

	var _events2 = _interopRequireDefault(_events);

	var _form = __webpack_require__(3);

	var _form2 = _interopRequireDefault(_form);

	var _input = __webpack_require__(6);

	var inputs = _interopRequireWildcard(_input);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports = Object.assign({
	    __esModule: true,
	    default: _form2.default,
	    Extend: _events2.default,
	    Form: _form2.default
	}, inputs);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _microEvents = __webpack_require__(2);

	var _microEvents2 = _interopRequireDefault(_microEvents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new _microEvents2.default();

/***/ },
/* 2 */
/***/ function(module, exports) {

	function _each(arr, func, thisArg) {
	    for (var i = 0; i < arr.length; i++) {
	        func.call(thisArg, arr[i]);
	    }
	}

	function _remove(arr, element) {
	    var index = arr.indexOf(element);
	    if (index !== -1) {
	        arr.splice(index, 1);
	    }
	}

	function _contains(arr, element) {
	    return arr.indexOf(element) !== -1;
	}

	function EventEmitter() {
	    this.listeners = {};
	}

	EventEmitter.prototype.maxListeners = 10;

	function _validateEventName(eventName) {
	    if (typeof eventName !== 'string') {
	        throw 'eventName is not a string';
	    }
	}

	function _validateListener(listener) {
	    if (typeof listener !== 'function') {
	        throw 'listener is not a function';
	    }
	}

	EventEmitter.prototype.on = function (eventName, listener) {
	    _validateEventName(eventName);
	    _validateListener(listener);
	    this.listeners[eventName] = this.listeners[eventName] || [];
	    if (this.listeners[eventName].length > this.maxListeners) {
	        throw 'Exceeded maxListeners - You might have a memory leak';
	    }
	    if (!_contains(this.listeners[eventName], listener)) {
	        this.listeners[eventName].push(listener);
	        this.emit('on', {
	            eventName: eventName,
	            listener: listener
	        });
	    }
	    return this;
	};

	EventEmitter.prototype.emit = function (eventName, event) {
	    _validateEventName(eventName);
	    var events = Array.prototype.slice.call(arguments, 1);
	    _each(this.listeners[eventName] || [], function (listener) {
	        listener.apply(this, events);
	    }, this);
	    return this;
	};

	EventEmitter.prototype.off = function (eventName, listener) {
	    _validateEventName(eventName);
	    _validateListener(listener);
	    _remove(this.listeners[eventName] || [], listener);

	    this.emit('off', {
	        eventName: eventName,
	        listener: listener
	    });
	    return this;
	};

	EventEmitter.prototype.clearListeners = function (eventName) {
	    _validateEventName(eventName);
	    this.listeners[eventName] = null;
	    return this;
	};

	module.exports = EventEmitter;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _microEvents = __webpack_require__(2);

	var _microEvents2 = _interopRequireDefault(_microEvents);

	var _container = __webpack_require__(5);

	var _container2 = _interopRequireDefault(_container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Form = function (_EventEmitter) {
	    _inherits(Form, _EventEmitter);

	    function Form() {
	        _classCallCheck(this, Form);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this));

	        _this.Container = function (args) {
	            return _this._container = new _container2.default(args);
	        };
	        return _this;
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

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _form = __webpack_require__(3);

	var _form2 = _interopRequireDefault(_form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Container = function (_React$Component) {
	    _inherits(Container, _React$Component);

	    function Container(args) {
	        _classCallCheck(this, Container);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Container).call(this, args));

	        if (_this.props.form instanceof Container) {
	            _this.props.form.registerField(_this.props.name, _this);
	        }
	        _this.inputs = {};
	        return _this;
	    }

	    _createClass(Container, [{
	        key: 'removeField',
	        value: function removeField(name) {
	            delete this.inputs[name];
	        }
	    }, {
	        key: 'registerField',
	        value: function registerField(name, value) {
	            this.inputs[name] = value;
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
	                    this.inputs[key].setState({ value: values[key] });
	                }
	            }
	            return this;
	        }
	    }, {
	        key: 'attachElements',
	        value: function attachElements(element) {
	            var _this2 = this;

	            var form = this;
	            return _react2.default.Children.map(element.props.children, function (child) {
	                if ((child.props || {}).children) {
	                    var children = _this2.attachElements(child);
	                    return _react2.default.cloneElement(child, { form: form, children: children });
	                }

	                if (child.type instanceof Object) {
	                    return _react2.default.cloneElement(child, { form: form });
	                }

	                return child;
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                this.attachElements(this)
	            );
	        }
	    }]);

	    return Container;
	}(_react2.default.Component);

	exports.default = Container;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Select = exports.InputObject = exports.InputArray = exports.Input = undefined;

	var _text = __webpack_require__(7);

	var _text2 = _interopRequireDefault(_text);

	var _select = __webpack_require__(9);

	var _select2 = _interopRequireDefault(_select);

	var _array = __webpack_require__(10);

	var _array2 = _interopRequireDefault(_array);

	var _object = __webpack_require__(11);

	var _object2 = _interopRequireDefault(_object);

	__webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Input = _text2.default;
	exports.InputArray = _array2.default;
	exports.InputObject = _object2.default;
	exports.Select = _select2.default;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(1);

	var _events2 = _interopRequireDefault(_events);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _base = __webpack_require__(8);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Input = function (_InputBase) {
	    _inherits(Input, _InputBase);

	    function Input(args) {
	        _classCallCheck(this, Input);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, args));
	    }

	    _createClass(Input, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var type = _props.type;

	            var props = _objectWithoutProperties(_props, ['type']);

	            return _react2.default.createElement('input', _extends({}, props, {
	                type: type || 'text',
	                value: this.getValue(),
	                onChange: function onChange(event) {
	                    return _this2._setValue(event.target.value);
	                }
	            }));
	        }
	    }]);

	    return Input;
	}(_base2.default);

	exports.default = Input;

	var TextArea = function (_InputBase2) {
	    _inherits(TextArea, _InputBase2);

	    function TextArea(args) {
	        _classCallCheck(this, TextArea);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TextArea).call(this, args));
	    }

	    _createClass(TextArea, [{
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            return _react2.default.createElement('textarea', _extends({}, this.props, {
	                value: this.getValue(),
	                onChange: function onChange(event) {
	                    return _this4._setValue(event.target.value);
	                }
	            }));
	        }
	    }]);

	    return TextArea;
	}(_base2.default);

	_events2.default.on('register.input', function (form) {
	    form.register('Input', Input);
	    form.register('TextArea', TextArea);
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _container = __webpack_require__(5);

	var _container2 = _interopRequireDefault(_container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Base = function (_React$Component) {
	    _inherits(Base, _React$Component);

	    function Base(args) {
	        _classCallCheck(this, Base);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Base).call(this, args));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Base, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (!(this.props.form instanceof _container2.default)) {
	                throw new Error("The input must be inside of a form/container");
	            }
	            this.props.form.registerField(this.props.name, this);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.props.form.removeField(this.props.name);
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
	}(_react2.default.Component);

	exports.default = Base;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _events = __webpack_require__(1);

	var _events2 = _interopRequireDefault(_events);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _base = __webpack_require__(8);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function Value(val) {
	    if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === "object" && val.value) {
	        return val.value;
	    }
	    return val;
	}

	function Label(val) {
	    if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === "object" && val.label) {
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

	_events2.default.on('register.input', function (form) {
	    form.register('Select', Select);
	    form.register('SelectFilter', SelectFilter);
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _container = __webpack_require__(5);

	var _container2 = _interopRequireDefault(_container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputArray = function (_Container) {
	    _inherits(InputArray, _Container);

	    function InputArray(args) {
	        _classCallCheck(this, InputArray);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputArray).call(this, args));

	        _this.template = args.children;
	        _this.state = { children: [] };
	        return _this;
	    }

	    _createClass(InputArray, [{
	        key: 'getValue',
	        value: function getValue() {
	            var values = [];
	            for (var name in this.inputs) {
	                if (this.inputs.hasOwnProperty(name)) {
	                    values.push(this.inputs[name].getValue());
	                }
	            }
	            return values;
	        }
	    }, {
	        key: 'clone',
	        value: function clone(children) {
	            return _react2.default.Children.map(children, function (child) {
	                return _react2.default.cloneElement(child);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                this.state.children,
	                _react2.default.createElement(
	                    'a',
	                    { onClick: function onClick(e) {
	                            var children = _this2.state.children;
	                            var child = _react2.default.createElement(_container2.default, { children: _this2.clone(_this2.template), form: _this2, name: children.length });
	                            children.push(child);

	                            _this2.setState({ children: children });
	                        } },
	                    'Add'
	                )
	            );
	        }
	    }]);

	    return InputArray;
	}(_container2.default);

	exports.default = InputArray;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _container = __webpack_require__(5);

	var _container2 = _interopRequireDefault(_container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputObject = function (_Container) {
	  _inherits(InputObject, _Container);

	  function InputObject() {
	    _classCallCheck(this, InputObject);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputObject).apply(this, arguments));
	  }

	  return InputObject;
	}(_container2.default);

	exports.default = InputObject;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _events = __webpack_require__(1);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	_events2.default.on('type.email', function (email) {
	    if (email && !re.test(email)) {
	        throw new Error('"' + email + '" is not valid email address');
	    }
	});

	_events2.default.on('required.true', function (value) {
	    if (value.length === 0) {
	        throw new Error();
	    }
	});

/***/ }
/******/ ]);