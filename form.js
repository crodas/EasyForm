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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Extend = exports.default = exports.Form = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _events = __webpack_require__(2);

	var _events2 = _interopRequireDefault(_events);

	var _microEvents = __webpack_require__(3);

	var _microEvents2 = _interopRequireDefault(_microEvents);

	__webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Form = function (_EventEmitter) {
	    _inherits(Form, _EventEmitter);

	    function Form() {
	        _classCallCheck(this, Form);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this));

	        _this.inputs = {};
	        _this._emit('register.input', _this);
	        return _this;
	    }

	    _createClass(Form, [{
	        key: '_emit',
	        value: function _emit() {
	            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                args[_key] = arguments[_key];
	            }

	            _events2.default.emit.apply(_events2.default, args);
	            this.emit.apply(this, args);
	        }
	    }, {
	        key: 'register',
	        value: function register(name, Input) {
	            var _this2 = this;

	            this[name] = function (args) {
	                var input = new Input(args);
	                _this2.inputs[args.name] = input;
	                return input;
	            };
	            this[name].propTypes = Object.assign({ name: _react2.default.PropTypes.string.isRequired }, Input.propTypes || {});
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
	        key: '_doValidate',
	        value: function _doValidate(input) {
	            var value = input.getValue();
	            console.error(value);
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
	        key: 'getValues',
	        value: function getValues() {
	            var values = {};
	            for (var name in this.inputs) {
	                if (this.inputs.hasOwnProperty(name)) {
	                    values[name] = this.inputs[name].getValue();
	                }
	            }
	            return values;
	        }
	    }]);

	    return Form;
	}(_microEvents2.default);

	exports.Form = Form;
	exports.default = Form;
	exports.Extend = _events2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _microEvents = __webpack_require__(3);

	var _microEvents2 = _interopRequireDefault(_microEvents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = new _microEvents2.default();

/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(5);

	__webpack_require__(7);

	__webpack_require__(9);

	__webpack_require__(10);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(2);

	var _events2 = _interopRequireDefault(_events);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _base = __webpack_require__(6);

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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _events = __webpack_require__(2);

	var _events2 = _interopRequireDefault(_events);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _base = __webpack_require__(6);

	var _base2 = _interopRequireDefault(_base);

	__webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ArrayInput = function (_InputBase) {
	    _inherits(ArrayInput, _InputBase);

	    function ArrayInput() {
	        _classCallCheck(this, ArrayInput);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(ArrayInput).apply(this, arguments));
	    }

	    _createClass(ArrayInput, [{
	        key: 'render',
	        value: function render() {
	            console.error(this.props.children);
	            return 'cesr';
	        }
	    }]);

	    return ArrayInput;
	}(_base2.default);

	_events2.default.on('register.input', function (form) {
	    form.register('Array', ArrayInput);
	});

/***/ },
/* 8 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }

	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }

	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }

	    return iterator
	  }

	  function Headers(headers) {
	    this.map = {}

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)

	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }

	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }

	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }

	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }

	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }

	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }

	  function Body() {
	    this.bodyUsed = false

	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (!body) {
	        this._bodyText = ''
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }

	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }

	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this)
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }

	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }

	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  }

	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response

	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }

	      var xhr = new XMLHttpRequest()

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }

	        return
	      }

	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(request.method, request.url, true)

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _events = __webpack_require__(2);

	var _events2 = _interopRequireDefault(_events);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _base = __webpack_require__(6);

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

	var _events = __webpack_require__(2);

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