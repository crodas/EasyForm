import React from 'react';

export function Random(length = 10) {
    return Math.random().toString(36).substr(2, length);
}

export function toArray(object) {
    let values = []; 
    for (var name in object) {
        if (object.hasOwnProperty(name)) {
            values.push(object[name]);
        }
    }
    return values;
}

export function Stateless(props) {
    if (props.children instanceof Array) {
        return <div>{props.children}</div>;
    }
    return props.children || null;
}
