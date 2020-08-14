import React, { Component } from 'react';
import client from './feathers';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  updateField(name, ev) {
    this.setState({ [name]: ev.target.value });
  }

  login() {
    const { email, password } = this.state;
    return client.authenticate({
      strategy: 'local',
      email, password
    }).catch(error => this.setState({ error }));
  }

  signup() {
    let { email, password, firstname, lastname, phone} = this.state;  
    firstname = firstname || " ";  
    lastname = lastname || " ";
    phone = phone || " ";
    return client.service('users')
      .create({ email, password, firstname, lastname, phone})
      .then(() => this.login());
  }


  render() {
    return <main className="login container">
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet text-center heading">
          <h1 className="font-100">Sign Up</h1>
          <p>{this.state.error && this.state.error.message}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
          <form className="form">
            <fieldset>
              <input className="block" type="email" name="email" placeholder="email" required onChange={ev => this.updateField('email', ev)} />
            </fieldset>
            <fieldset>
              <input className="block" type="password" name="password" placeholder="password" required onChange={ev => this.updateField('password', ev)} />
            </fieldset>
            <fieldset>
              <input className="block" type="text" name="firstname" placeholder="FirstName" required onChange={ev => this.updateField('firstname', ev)} />
            </fieldset>
            <fieldset>
              <input className="block" type="text" name="lastname" placeholder="LastName" required onChange={ev => this.updateField('lastname', ev)} />
            </fieldset>    
            <fieldset>
              <input className="block" type="tel" name="phone" placeholder="888 888 8888" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="12"  title="Ten digits code" required onChange={ev => this.updateField('phone', ev)}/>              
            </fieldset> 
            <button type="submit" className="button button-primary block signup" onClick={() => this.signup()}>
              Signup
            </button>
          </form>
        </div>
      </div>
    </main>;
  }
}
