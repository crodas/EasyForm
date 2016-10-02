var reforms =
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

	var _input = __webpack_require__(8);

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

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

	var FormContainer = function (_Container) {
	    _inherits(FormContainer, _Container);

	    function FormContainer() {
	        _classCallCheck(this, FormContainer);

	        return _possibleConstructorReturn(this, (FormContainer.__proto__ || Object.getPrototypeOf(FormContainer)).apply(this, arguments));
	    }

	    _createClass(FormContainer, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.props.form._container = this;
	            if (this.props.values) {
	                this.props.form._container.setValues(this.props.values);
	            }
	        }
	    }]);

	    return FormContainer;
	}(_container2.default);

	FormContainer.contextTypes = {};

	var Form = function (_EventEmitter) {
	    _inherits(Form, _EventEmitter);

	    function Form() {
	        _classCallCheck(this, Form);

	        var _this2 = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this));

	        _this2._values = {};
	        _this2.Container = _this2.render = function (args) {
	            return _react2.default.createElement(FormContainer, _extends({}, args, { form: _this2, values: _this2._values }));
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
	            if (this._container) {
	                this._container.setValues(values);
	            } else {
	                this._values = Object.assign({}, this._values, values);
	            }
	            return this;
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

	var _utils = __webpack_require__(6);

	var _global = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Container = function (_React$Component) {
	    _inherits(Container, _React$Component);

	    function Container(args) {
	        _classCallCheck(this, Container);

	        var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, args));

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
	            if (this.context.container) {
	                this.context.container.removeField(this.props.name);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'reforms',
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

/***/ },
/* 6 */
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
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.register = register;
	exports.get = get;
	exports.findWithDOM = findWithDOM;
	var instances = {};

	function register(cont) {
	    instances[cont.id] = cont;
	}

	function get(id) {
	    if (!instances[id]) {
	        throw new Error("Cannot find container " + id);
	    }
	    return instances[id];
	}

	function findWithDOM(domElement) {
	    var filter = arguments.length <= 1 || arguments[1] === undefined ? function () {
	        return true;
	    } : arguments[1];

	    var node = domElement;
	    while (node) {
	        if (instances[node.id] && filter(instances[node.id])) {
	            return instances[node.id];
	        }
	        node = node.parentNode;
	    }

	    throw new Error("DOM element must be inside a form");
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Select = exports.DropDown = exports.TextArea = exports.Group = exports.Input = exports.BaseInput = undefined;

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _text = __webpack_require__(9);

	var _text2 = _interopRequireDefault(_text);

	var _textarea = __webpack_require__(12);

	var _textarea2 = _interopRequireDefault(_textarea);

	var _select = __webpack_require__(13);

	var _select2 = _interopRequireDefault(_select);

	var _array = __webpack_require__(14);

	var _array2 = _interopRequireDefault(_array);

	var _container = __webpack_require__(5);

	var _container2 = _interopRequireDefault(_container);

	var _base = __webpack_require__(10);

	var _base2 = _interopRequireDefault(_base);

	__webpack_require__(15);

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

	var _base = __webpack_require__(10);

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

	        return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, args));
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _context = __webpack_require__(11);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Base = function (_Context) {
	    _inherits(Base, _Context);

	    function Base(args) {
	        _classCallCheck(this, Base);

	        var _this = _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).call(this, args));

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

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormContext = function (_React$Component) {
	    _inherits(FormContext, _React$Component);

	    function FormContext() {
	        _classCallCheck(this, FormContext);

	        return _possibleConstructorReturn(this, (FormContext.__proto__ || Object.getPrototypeOf(FormContext)).apply(this, arguments));
	    }

	    return FormContext;
	}(_react2.default.Component);

	FormContext.contextTypes = {
	    container: _react2.default.PropTypes.object.isRequired
	};
	exports.default = FormContext;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _base = __webpack_require__(10);

	var _base2 = _interopRequireDefault(_base);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextArea = function (_InputBase) {
	    _inherits(TextArea, _InputBase);

	    function TextArea(args) {
	        _classCallCheck(this, TextArea);

	        return _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, args));
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
/* 13 */
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

	var _base = __webpack_require__(10);

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

	        return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
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

	        return _possibleConstructorReturn(this, (SelectFilter.__proto__ || Object.getPrototypeOf(SelectFilter)).apply(this, arguments));
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _container = __webpack_require__(5);

	var _container2 = _interopRequireDefault(_container);

	var _context = __webpack_require__(11);

	var _context2 = _interopRequireDefault(_context);

	var _utils = __webpack_require__(6);

	var _global = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ArrayContainer = function (_Container) {
	    _inherits(ArrayContainer, _Container);

	    function ArrayContainer(args) {
	        _classCallCheck(this, ArrayContainer);

	        var _this = _possibleConstructorReturn(this, (ArrayContainer.__proto__ || Object.getPrototypeOf(ArrayContainer)).call(this, args));

	        _this.template = args.children;
	        _this.state = { children: {} };
	        return _this;
	    }

	    _createClass(ArrayContainer, [{
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
	            return _react2.default.Children.map(children, function (child) {
	                return _react2.default.cloneElement(child);
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

	            children[id] = _react2.default.createElement(_container2.default, { key: id, children: this.clone(this.template, id), name: this.id + "_" + id });

	            this.setState({ children: children });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'reforms',
	                { className: this.props.className || '', id: this.id },
	                (0, _utils.toArray)(this.state.children)
	            );
	        }
	    }]);

	    return ArrayContainer;
	}(_container2.default);

	ArrayContainer.clone = function (ev, name) {
	    var container = (0, _global.findWithDOM)(ev.target);
	    var array = container.findElement(name);

	    array.addBlock();
	};

	ArrayContainer.remove = function (ev) {
	    var container = (0, _global.findWithDOM)(ev.target);

	    var _container$props$name = container.props.name.split(/_/);

	    var _container$props$name2 = _slicedToArray(_container$props$name, 2);

	    var parentContainer = _container$props$name2[0];
	    var blockId = _container$props$name2[1];

	    (0, _global.get)(parentContainer).removeBlock(blockId);
	};

	exports.default = ArrayContainer;

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