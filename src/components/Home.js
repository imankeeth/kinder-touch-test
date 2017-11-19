import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <nav id="nav">
          <input className="trigger" type="checkbox" id="mainNavButton" />
          <label htmlFor="mainNavButton">Menu</label>
          <ul>
            <li>
              <NavLink className="menu-items" path="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="menu-items" path="/aboutus">
                About Us
              </NavLink>
              <ul>
                <li>
                  <NavLink className="menu-items" path="/profile">
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink className="menu-items" path="/team">
                    Team
                  </NavLink>
                </li>
                <li>
                  <NavLink className="menu-items" path="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
