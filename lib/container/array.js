'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _container = require('./container.jsx');

var _container2 = _interopRequireDefault(_container);

var _context = require('../context.jsx');

var _context2 = _interopRequireDefault(_context);

var _utils = require('../utils.jsx');

var _global = require('./global.jsx');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayContainer = function (_Container) {
    _inherits(ArrayContainer, _Container);

    function ArrayContainer(args) {
        _classCallCheck(this, ArrayContainer);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ArrayContainer).call(this, args));

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
                'div',
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