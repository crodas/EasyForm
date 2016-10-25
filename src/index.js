import GlobalEmitter from './events';
import Form from './container/form';
import ObjectAssign from 'object-assign';
import * as inputs from './input';

module.exports = exports = ObjectAssign({
    __esModule: true,
    default: Form,
    Extend: GlobalEmitter,
    Form,
}, inputs);
