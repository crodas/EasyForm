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
	        _this.state = {};
	        _this.children = _this.attachElements(_this);
	        return _this;
	    }

	    _createClass(Container, [{
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
	                        this.inputs[key].setState({ value: values[key] });
	                    }
	                }
	            }
	            return this;
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.form) {
	                this.props.form.removeField(this.props.name);
	            }
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
	                this.children
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
	exports.Dropzone = exports.Select = exports.DropDown = exports.TextArea = exports.ArrayContainer = exports.Container = exports.Group = exports.Input = undefined;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _text = __webpack_require__(7);

	var _text2 = _interopRequireDefault(_text);

	var _textarea = __webpack_require__(9);

	var _textarea2 = _interopRequireDefault(_textarea);

	var _select = __webpack_require__(10);

	var _select2 = _interopRequireDefault(_select);

	var _array = __webpack_require__(11);

	var _array2 = _interopRequireDefault(_array);

	var _container = __webpack_require__(5);

	var _container2 = _interopRequireDefault(_container);

	var _dropzone = __webpack_require__(13);

	var _dropzone2 = _interopRequireDefault(_dropzone);

	__webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Group(args) {
	    if (args.multiple) {
	        return _react2.default.createElement(_array2.default, args);
	    }

	    return _react2.default.createElement(_container2.default, args);
	}

	exports.Input = _text2.default;
	exports.Group = Group;
	exports.Container = _container2.default;
	exports.ArrayContainer = _array2.default;
	exports.TextArea = _textarea2.default;
	exports.DropDown = _select2.default;
	exports.Select = _select2.default;
	exports.Dropzone = _dropzone2.default;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _base = __webpack_require__(8);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextArea = function (_InputBase) {
	    _inherits(TextArea, _InputBase);

	    function TextArea(args) {
	        _classCallCheck(this, TextArea);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TextArea).call(this, args));
	    }

	    _createClass(TextArea, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement('textarea', _extends({}, this.props, {
	                value: this.getValue(),
	                onChange: function onChange(event) {
	                    return _this2._setValue(event.target.value);
	                }
	            }));
	        }
	    }]);

	    return TextArea;
	}(_base2.default);

	exports.default = TextArea;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

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

/***/ },
/* 11 */
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

	var _utils = __webpack_require__(12);

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
	        _this.state = { children: {} };
	        return _this;
	    }

	    _createClass(InputArray, [{
	        key: 'getValue',
	        value: function getValue() {
	            return (0, _utils.toArray)(this.inputs).map(function (input) {
	                return input.getValue();
	            });
	        }
	    }, {
	        key: 'setValues',
	        value: function setValues(values) {
	            if (!(values instanceof Array)) {
	                throw new Error('Expecting array of values for ' + this.props.name);
	            }

	            var inputs = (0, _utils.toArray)(this.inputs);

	            for (var i = 0; i < values.length - inputs.length; ++i) {
	                this.addBlock();
	            }

	            inputs = (0, _utils.toArray)(this.inputs);
	            for (var _i = 0; _i < values.length; ++_i) {
	                inputs[_i].setValues(values[_i]);
	            }
	        }
	    }, {
	        key: 'clone',
	        value: function clone(children, id) {
	            var _this2 = this;

	            return _react2.default.Children.map(children, function (child) {
	                var args = { key: (0, _utils.Random)() };
	                if (child.props.removeBlock) {
	                    args = { onClick: function onClick(e) {
	                            if (typeof child.props.onClick === 'function') {
	                                child.props.onClick(e);
	                            }
	                            _this2.removeBlock(id);
	                        } };
	                }
	                return _react2.default.cloneElement(child, args);
	            });
	        }
	    }, {
	        key: 'removeBlock',
	        value: function removeBlock(id) {
	            var children = this.state.children;
	            delete children[id];

	            this.setState({ children: children });
	        }
	    }, {
	        key: 'addBlock',
	        value: function addBlock() {
	            var children = this.state.children;
	            var id = (0, _utils.Random)();

	            children[id] = _react2.default.createElement(_container2.default, { key: id, children: this.clone(this.template, id), form: this, name: id });

	            this.setState({ children: children });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'button',
	                    { className: 'btn', onClick: function onClick(e) {
	                            return _this3.addBlock();
	                        } },
	                    'Add block'
	                ),
	                (0, _utils.toArray)(this.state.children)
	            );
	        }
	    }]);

	    return InputArray;
	}(_container2.default);

	exports.default = InputArray;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Random = Random;
	exports.toArray = toArray;
	function Random() {
	    var length = arguments.length <= 0 || arguments[0] === undefined ? 10 : arguments[0];

	    return Math.random().toString(36).substr(2, length);
	}

	function toArray(object) {
	    var values = [];
	    for (var name in object) {
	        if (object.hasOwnProperty(name)) {
	            values.push(object[name]);
	        }
	    }
	    return values;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _base = __webpack_require__(8);

	var _base2 = _interopRequireDefault(_base);

	var _reactDropzone = __webpack_require__(14);

	var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DropzoneInput = function (_InputBase) {
	    _inherits(DropzoneInput, _InputBase);

	    function DropzoneInput(args) {
	        _classCallCheck(this, DropzoneInput);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DropzoneInput).call(this, args));

	        _this.state = { files: [] };
	        return _this;
	    }

	    _createClass(DropzoneInput, [{
	        key: 'clone',
	        value: function clone(children, file, index) {
	            var _this2 = this;

	            return _react2.default.Children.map(children, function (child) {
	                if (!child.type) {
	                    return child;
	                }
	                if (child.props['set-url']) {
	                    var props = {};
	                    props['set-url'] = undefined;
	                    props[child.props['set-url']] = file.preview;
	                    return _react2.default.cloneElement(child, props);
	                }

	                if ((child.props || {}).children) {
	                    return _react2.default.cloneElement(child, {
	                        children: _this2.clone(child.props.children, file, index)
	                    });
	                }

	                if (child.props.remove) {
	                    return _react2.default.cloneElement(child, {
	                        onClick: function onClick(e) {
	                            _this2.state.files.splice(index, 1);
	                            _this2.setState({ files: _this2.state.files });
	                            if (typeof child.props.onClick === 'function') {
	                                child.props.onClick(e);
	                            }
	                        }
	                    });
	                }

	                return child;
	            });
	        }
	    }, {
	        key: 'getPreviews',
	        value: function getPreviews() {
	            var _this3 = this;

	            return this.state.files.map(function (file, index) {
	                return _this3.clone(_this3.props.children, file, index);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            var children = this.getPreviews();
	            if (this.props.multiple === false && this.state.files.length > 0) {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    children
	                );
	            }
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _reactDropzone2.default,
	                    { onDrop: function onDrop(files) {
	                            _this4._setValue(files);
	                            _this4.setState({ files: files });
	                        }, accept: this.props.accept || '' },
	                    _react2.default.createElement(
	                        'div',
	                        null,
	                        this.props.placeholder || 'Try dropping some files here, or click to select files to upload.'
	                    )
	                )
	            );
	        }
	    }]);

	    return DropzoneInput;
	}(_base2.default);

	exports.default = DropzoneInput;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(4));
		else if(typeof define === 'function' && define.amd)
			define(["react"], factory);
		else if(typeof exports === 'object')
			exports["Dropzone"] = factory(require("react"));
		else
			root["Dropzone"] = factory(root["react"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
		
		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
		
		var _attrAccept = __webpack_require__(1);
		
		var _attrAccept2 = _interopRequireDefault(_attrAccept);
		
		var _react = __webpack_require__(2);
		
		var _react2 = _interopRequireDefault(_react);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
		
		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint prefer-template: 0 */
		
		var supportMultiple = typeof document !== 'undefined' && document && document.createElement ? 'multiple' in document.createElement('input') : true;
		
		var Dropzone = function (_React$Component) {
		  _inherits(Dropzone, _React$Component);
		
		  function Dropzone(props, context) {
		    _classCallCheck(this, Dropzone);
		
		    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropzone).call(this, props, context));
		
		    _this.onClick = _this.onClick.bind(_this);
		    _this.onDragStart = _this.onDragStart.bind(_this);
		    _this.onDragEnter = _this.onDragEnter.bind(_this);
		    _this.onDragLeave = _this.onDragLeave.bind(_this);
		    _this.onDragOver = _this.onDragOver.bind(_this);
		    _this.onDrop = _this.onDrop.bind(_this);
		
		    _this.state = {
		      isDragActive: false
		    };
		    return _this;
		  }
		
		  _createClass(Dropzone, [{
		    key: 'componentDidMount',
		    value: function componentDidMount() {
		      this.enterCounter = 0;
		    }
		  }, {
		    key: 'onDragStart',
		    value: function onDragStart(e) {
		      if (this.props.onDragStart) {
		        this.props.onDragStart.call(this, e);
		      }
		    }
		  }, {
		    key: 'onDragEnter',
		    value: function onDragEnter(e) {
		      e.preventDefault();
		
		      // Count the dropzone and any children that are entered.
		      ++this.enterCounter;
		
		      // This is tricky. During the drag even the dataTransfer.files is null
		      // But Chrome implements some drag store, which is accesible via dataTransfer.items
		      var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];
		
		      // Now we need to convert the DataTransferList to Array
		      var allFilesAccepted = this.allFilesAccepted(Array.prototype.slice.call(dataTransferItems));
		
		      this.setState({
		        isDragActive: allFilesAccepted,
		        isDragReject: !allFilesAccepted
		      });
		
		      if (this.props.onDragEnter) {
		        this.props.onDragEnter.call(this, e);
		      }
		    }
		  }, {
		    key: 'onDragOver',
		    value: function onDragOver(e) {
		      e.preventDefault();
		      e.stopPropagation();
		      return false;
		    }
		  }, {
		    key: 'onDragLeave',
		    value: function onDragLeave(e) {
		      e.preventDefault();
		
		      // Only deactivate once the dropzone and all children was left.
		      if (--this.enterCounter > 0) {
		        return;
		      }
		
		      this.setState({
		        isDragActive: false,
		        isDragReject: false
		      });
		
		      if (this.props.onDragLeave) {
		        this.props.onDragLeave.call(this, e);
		      }
		    }
		  }, {
		    key: 'onDrop',
		    value: function onDrop(e) {
		      e.preventDefault();
		
		      // Reset the counter along with the drag on a drop.
		      this.enterCounter = 0;
		
		      this.setState({
		        isDragActive: false,
		        isDragReject: false
		      });
		
		      var droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
		      var max = this.props.multiple ? droppedFiles.length : Math.min(droppedFiles.length, 1);
		      var files = [];
		
		      for (var i = 0; i < max; i++) {
		        var file = droppedFiles[i];
		        // We might want to disable the preview creation to support big files
		        if (!this.props.disablePreview) {
		          file.preview = window.URL.createObjectURL(file);
		        }
		        files.push(file);
		      }
		
		      if (this.allFilesAccepted(files)) {
		        if (this.props.onDrop) {
		          this.props.onDrop.call(this, files, e);
		        }
		
		        if (this.props.onDropAccepted) {
		          this.props.onDropAccepted.call(this, files, e);
		        }
		      } else {
		        if (this.props.onDropRejected) {
		          this.props.onDropRejected.call(this, files, e);
		        }
		      }
		    }
		  }, {
		    key: 'onClick',
		    value: function onClick() {
		      if (!this.props.disableClick) {
		        this.open();
		      }
		    }
		  }, {
		    key: 'allFilesAccepted',
		    value: function allFilesAccepted(files) {
		      var _this2 = this;
		
		      return files.every(function (file) {
		        return (0, _attrAccept2.default)(file, _this2.props.accept);
		      });
		    }
		  }, {
		    key: 'open',
		    value: function open() {
		      this.fileInputEl.value = null;
		      this.fileInputEl.click();
		    }
		  }, {
		    key: 'render',
		    value: function render() {
		      var _this3 = this;
		
		      var _props = this.props;
		      var accept = _props.accept;
		      var activeClassName = _props.activeClassName;
		      var inputProps = _props.inputProps;
		      var multiple = _props.multiple;
		      var name = _props.name;
		      var rejectClassName = _props.rejectClassName;
		
		      var rest = _objectWithoutProperties(_props, ['accept', 'activeClassName', 'inputProps', 'multiple', 'name', 'rejectClassName']);
		
		      var activeStyle = rest.activeStyle;
		      var className = rest.className;
		      var rejectStyle = rest.rejectStyle;
		      var style = rest.style;
		
		      var props = _objectWithoutProperties(rest, ['activeStyle', 'className', 'rejectStyle', 'style']);
		
		      var _state = this.state;
		      var isDragActive = _state.isDragActive;
		      var isDragReject = _state.isDragReject;
		
		
		      className = className || '';
		
		      if (isDragActive && activeClassName) {
		        className += ' ' + activeClassName;
		      }
		      if (isDragReject && rejectClassName) {
		        className += ' ' + rejectClassName;
		      }
		
		      if (!className && !style && !activeStyle && !rejectStyle) {
		        style = {
		          width: 200,
		          height: 200,
		          borderWidth: 2,
		          borderColor: '#666',
		          borderStyle: 'dashed',
		          borderRadius: 5
		        };
		        activeStyle = {
		          borderStyle: 'solid',
		          backgroundColor: '#eee'
		        };
		        rejectStyle = {
		          borderStyle: 'solid',
		          backgroundColor: '#ffdddd'
		        };
		      }
		
		      var appliedStyle = void 0;
		      if (activeStyle && isDragActive) {
		        appliedStyle = _extends({}, style, activeStyle);
		      } else if (rejectStyle && isDragReject) {
		        appliedStyle = _extends({}, style, rejectStyle);
		      } else {
		        appliedStyle = _extends({}, style);
		      }
		
		      var inputAttributes = {
		        accept: accept,
		        type: 'file',
		        style: { display: 'none' },
		        multiple: supportMultiple && multiple,
		        ref: function ref(el) {
		          return _this3.fileInputEl = el;
		        }, // eslint-disable-line
		        onChange: this.onDrop
		      };
		
		      if (name && name.length) {
		        inputAttributes.name = name;
		      }
		
		      // Remove custom properties before passing them to the wrapper div element
		      var customProps = ['disablePreview', 'disableClick', 'onDropAccepted', 'onDropRejected'];
		      var divProps = _extends({}, props);
		      customProps.forEach(function (prop) {
		        return delete divProps[prop];
		      });
		
		      return _react2.default.createElement(
		        'div',
		        _extends({
		          className: className,
		          style: appliedStyle
		        }, divProps /* expand user provided props first so event handlers are never overridden */, {
		          onClick: this.onClick,
		          onDragStart: this.onDragStart,
		          onDragEnter: this.onDragEnter,
		          onDragOver: this.onDragOver,
		          onDragLeave: this.onDragLeave,
		          onDrop: this.onDrop
		        }),
		        this.props.children,
		        _react2.default.createElement('input', _extends({}, inputProps /* expand user provided inputProps first so inputAttributes override them */, inputAttributes))
		      );
		    }
		  }]);
		
		  return Dropzone;
		}(_react2.default.Component);
		
		Dropzone.defaultProps = {
		  disablePreview: false,
		  disableClick: false,
		  multiple: true
		};
		
		Dropzone.propTypes = {
		  // Overriding drop behavior
		  onDrop: _react2.default.PropTypes.func,
		  onDropAccepted: _react2.default.PropTypes.func,
		  onDropRejected: _react2.default.PropTypes.func,
		
		  // Overriding drag behavior
		  onDragStart: _react2.default.PropTypes.func,
		  onDragEnter: _react2.default.PropTypes.func,
		  onDragLeave: _react2.default.PropTypes.func,
		
		  children: _react2.default.PropTypes.node, // Contents of the dropzone
		  style: _react2.default.PropTypes.object, // CSS styles to apply
		  activeStyle: _react2.default.PropTypes.object, // CSS styles to apply when drop will be accepted
		  rejectStyle: _react2.default.PropTypes.object, // CSS styles to apply when drop will be rejected
		  className: _react2.default.PropTypes.string, // Optional className
		  activeClassName: _react2.default.PropTypes.string, // className for accepted state
		  rejectClassName: _react2.default.PropTypes.string, // className for rejected state
		
		  disablePreview: _react2.default.PropTypes.bool, // Enable/disable preview generation
		  disableClick: _react2.default.PropTypes.bool, // Disallow clicking on the dropzone container to open file dialog
		
		  inputProps: _react2.default.PropTypes.object, // Pass additional attributes to the <input type="file"/> tag
		  multiple: _react2.default.PropTypes.bool, // Allow dropping multiple files
		  accept: _react2.default.PropTypes.string, // Allow specific types of files. See https://github.com/okonet/attr-accept for more information
		  name: _react2.default.PropTypes.string // name attribute for the input tag
		};
		
		exports.default = Dropzone;
		module.exports = exports['default'];

	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		module.exports=function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n(0)}([function(t,n,r){"use strict";n.__esModule=!0,r(8),r(9),n["default"]=function(t,n){if(t&&n){var r=function(){var r=n.split(","),e=t.name||"",o=t.type||"",i=o.replace(/\/.*$/,"");return{v:r.some(function(t){var n=t.trim();return"."===n.charAt(0)?e.toLowerCase().endsWith(n.toLowerCase()):/\/\*$/.test(n)?i===n.replace(/\/.*$/,""):o===n})}}();if("object"==typeof r)return r.v}return!0},t.exports=n["default"]},function(t,n){var r=t.exports={version:"1.2.2"};"number"==typeof __e&&(__e=r)},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(2),o=r(1),i=r(4),u=r(19),c="prototype",f=function(t,n){return function(){return t.apply(n,arguments)}},s=function(t,n,r){var a,p,l,d,y=t&s.G,h=t&s.P,v=y?e:t&s.S?e[n]||(e[n]={}):(e[n]||{})[c],x=y?o:o[n]||(o[n]={});y&&(r=n);for(a in r)p=!(t&s.F)&&v&&a in v,l=(p?v:r)[a],d=t&s.B&&p?f(l,e):h&&"function"==typeof l?f(Function.call,l):l,v&&!p&&u(v,a,l),x[a]!=l&&i(x,a,d),h&&((x[c]||(x[c]={}))[a]=l)};e.core=o,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,t.exports=s},function(t,n,r){var e=r(5),o=r(18);t.exports=r(22)?function(t,n,r){return e.setDesc(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n){var r=Object;t.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n,r){var e=r(20)("wks"),o=r(2).Symbol;t.exports=function(t){return e[t]||(e[t]=o&&o[t]||(o||r(6))("Symbol."+t))}},function(t,n,r){r(26),t.exports=r(1).Array.some},function(t,n,r){r(25),t.exports=r(1).String.endsWith},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r(7)("match")]=!1,!"/./"[t](n)}catch(o){}}return!0}},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(16),o=r(11),i=r(7)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(2),o=r(4),i=r(6)("src"),u="toString",c=Function[u],f=(""+c).split(u);r(1).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,u){"function"==typeof r&&(o(r,i,t[n]?""+t[n]:f.join(String(n))),"name"in r||(r.name=n)),t===e?t[n]=r:(u||delete t[n],o(t,n,r))})(Function.prototype,u,function(){return"function"==typeof this&&this[i]||c.call(this)})},function(t,n,r){var e=r(2),o="__core-js_shared__",i=e[o]||(e[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(17),o=r(13);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},function(t,n,r){t.exports=!r(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(23),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){"use strict";var e=r(3),o=r(24),i=r(21),u="endsWith",c=""[u];e(e.P+e.F*r(14)(u),"String",{endsWith:function(t){var n=i(this,t,u),r=arguments,e=r.length>1?r[1]:void 0,f=o(n.length),s=void 0===e?f:Math.min(o(e),f),a=String(t);return c?c.call(n,a,s):n.slice(s-a.length,s)===a}})},function(t,n,r){var e=r(5),o=r(3),i=r(1).Array||Array,u={},c=function(t,n){e.each.call(t.split(","),function(t){void 0==n&&t in i?u[t]=i[t]:t in[]&&(u[t]=r(12)(Function.call,[][t],n))})};c("pop,reverse,shift,keys,values,entries",1),c("indexOf,every,some,forEach,map,filter,find,findIndex,includes",3),c("join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill"),o(o.S,"Array",u)}]);

	/***/ },
	/* 2 */
	/***/ function(module, exports) {

		module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=index.js.map

/***/ },
/* 15 */
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