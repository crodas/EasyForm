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