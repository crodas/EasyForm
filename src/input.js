import React from 'react';
import Input from './inputs/text';
import TextArea from './inputs/textarea';
import DropDown from './inputs/select';
import ArrayContainer  from './container/array';
import Container from './container/container';
import BaseInput from './inputs/base';

import './validate'

function Group(args) {
    if (args.multiple) {
        return <ArrayContainer {...args} />
    }

    return <Container {...args} />
}

Group.add = ArrayContainer.clone;
Group.remove = ArrayContainer.remove;

export {
    BaseInput,
    Input,
    Group,
    TextArea,
    DropDown,
    DropDown as Select,
};
