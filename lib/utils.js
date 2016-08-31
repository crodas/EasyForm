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