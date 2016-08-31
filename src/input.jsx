import React from 'react';
import Input from './inputs/text.jsx';
import TextArea from './inputs/textarea.jsx';
import DropDown from './inputs/select.jsx';
import ArrayContainer  from './container/array.jsx';
import Container from './container/container.jsx';
import BaseInput from './inputs/base.jsx';

import './validate.jsx'

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
