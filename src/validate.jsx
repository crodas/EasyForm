import Global from './events.jsx';

let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

Global.on('type.email', function(email) {
    if (email && !re.test(email)) {
        throw new Error(`"${email}" is not valid email address`);
    }
});

Global.on('required.true', function(value) {
    if (value.length === 0) {
        throw new Error;
    }
});
