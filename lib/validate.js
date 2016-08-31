'use strict';

var _events = require('./events.jsx');

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