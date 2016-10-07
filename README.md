# reforms

React forms made easy.

## Benefits

1. Ease of use.
2. Best of both worlds (React and Javascript).
  1. `Form` object to populate the form, get the values afterwards
  2. React components to render the form.
3. Extensible
  1. Easy to define new Input types.

## Usage

```bash
npm install --save reforms
```

```js
import {Form, Input} from 'reforms';
import React from 'react';


class MyForm extends React.Component {
  constructor(args) {
    super(args);
    this.form = new Form;
  }
  render() {
    let form = this.form;
    return <form.render>
      <div className="form-group">
        <label>E-mail</label>
        <Input type="email" className="form-control" name="email" placeholder="E-mail address" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <Input type="password"  className="form-control" name="password" placeholder="Password" />
      </div>
      <button onClick={e => {
        console.error('submit form with values', form.getValues()) 
      }} className="btn btn-default">Submit</button>
    </form.render>
  }
}
```


