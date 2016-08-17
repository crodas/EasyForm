import React from 'react';

export default class FormContext extends React.Component {
    static contextTypes = {
        container: React.PropTypes.object.isRequired
    };
}

