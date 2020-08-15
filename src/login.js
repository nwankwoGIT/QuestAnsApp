import React, { Component } from 'react';
import client from './feathers';
import 'semantic-ui-css/semantic.min.css'


export default class Login extends Component {
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
    
  render() {
    return <main className="login container">
    <div className="row">
      <div className="col-12 col-6-tablet push-3-tablet text-center heading">
        <h1 className="font-100">Log in </h1>
        <p>{this.state.error && this.state.error.message}</p>
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-6-tablet push-3-tablet col-4-desktop push-4-desktop">
        <form className="form">
          <fieldset>
            <input className="block" type="email" name="email" placeholder="email" onChange={ev => this.updateField('email', ev)} />
          </fieldset>    
          <fieldset>
            <input className="block" type="password" name="password" placeholder="password" onChange={ev => this.updateField('password', ev)} />
          </fieldset>    
          <button type="button" className="button button-primary block signup" onClick={() => this.login()}>
            Log in
          </button>            
        </form>
      </div>
    </div>
    </main>;
  }
}

/*
return <main className="login container">
    <div class="ui placeholder segment">
      <div class="ui two column very relaxed stackable grid">
        <div class="column">
          <div class="ui form">
            <div class="field">
              <label>Username</label>
              <div class="ui left icon input">
                <input type="text" placeholder="Username"/>
                <i class="user icon"></i>
              </div>
            </div>
            <div class="field">
              <label>Password</label>
              <div class="ui left icon input">
                <input type="password"/>
                <i class="lock icon"></i>
              </div>
            </div>
            <div class="ui blue submit button" onClick={() => this.login()}>Login</div>
          </div>
        </div>
        <div class="middle aligned column">
          <div class="ui big button">
            <i class="signup icon"></i>
            Sign Up
          </div>
        </div>
      </div>
      <div class="ui vertical divider">
        Or
      </div>
    </div>    
    </main>;
*/