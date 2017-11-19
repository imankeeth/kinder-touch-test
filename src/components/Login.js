import React, { Component } from 'react';
import '../styles/login.css';

export default class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="profile profile--open">
          <div className="profile__form">
            <div className="profile__fields">
              <div className="field">
                <input
                  type="text"
                  id="fieldUser"
                  className="input"
                  required
                  pattern=".*\S.*"
                />
                <label htmlFor="fieldUser" className="label">
                  Username
                </label>
              </div>
              <div className="field">
                <input
                  type="password"
                  id="fieldPassword"
                  className="input"
                  required
                  pattern=".*\S.*"
                />
                <label htmlFor="fieldPassword" className="label">
                  Password
                </label>
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
