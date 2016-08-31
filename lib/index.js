'use strict';

var _events = require('./events.jsx');

var _events2 = _interopRequireDefault(_events);

var _form = require('./container/form.jsx');

var _form2 = _interopRequireDefault(_form);

var _input = require('./input.jsx');

var inputs = _interopRequireWildcard(_input);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports = Object.assign({
    __esModule: true,
    default: _form2.default,
    Extend: _events2.default,
    Form: _form2.default
}, inputs);