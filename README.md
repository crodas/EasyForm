# EasyForm
Forms and React made easy.

## Benefits

1. Ease of use.
2. Best of both worlds (React and Javascript).
  1. `Form` object to popular the form, get the values afterwards
  2. React components to render the form.
3. Extensible
  1. Easy to define new Input types.

## Usage

```js
import Form from 'easy-forms';
import React from 'react';


class MyForm extends React.Component {
  constructor(args) {
    super(args);
    this.form = new Form;
  }
  render() {
    let form = this.form;
    return <div>
      <div className="form-group">
        <label>E-mail</label>
        <form.Input type="email" className="form-control" name="email" placeholder="E-mail address" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <form.Input type="password"  className="form-control" name="password" placeholder="Password" />
      </div>
      <button onClick={e => {
        console.error('submit form with values', this.form.getValues()) 
      }} className="btn btn-default">Submit</button>
    </div>
  }
}
```
