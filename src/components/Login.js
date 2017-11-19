import React, { Component } from 'react';
import '../styles/login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailid: '',
      password: '',
    };
    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onFieldChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="profile profile--open">
          <div className="profile__form">
            <div className="profile__fields">
              <div className="field">
                <input
                  type="text"
                  id="emailid"
                  name="emailid"
                  className="input"
                  value={this.state.emailid}
                  onChange={this.onFieldChange}
                  required
                />
                <label htmlFor="emailid" className="label">
                  Email ID
                </label>
                {/* <span>Please fill this field</span> */}
              </div>
              <div className="field">
                <input
                  type="password"
                  id="fieldPassword"
                  name="password"
                  className="input"
                  value={this.state.password}
                  onChange={this.onFieldChange}
                  required
                />
                <label htmlFor="fieldPassword" className="label">
                  Password
                </label>
                {/* <span>Please fill this field</span> */}
              </div>
              <div className="profile__footer">
                <div className="button raised blue">
                  <div className="center">LOGIN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
