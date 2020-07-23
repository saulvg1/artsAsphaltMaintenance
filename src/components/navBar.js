import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../static/assets/businessLogo.png";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar-wrapper" id="navbar">
        <div className="navbar-logo">
          <img src={logo} />
        </div>

        <div className="links">
          <div className="link-wrapper">
            <NavLink exact to="/" activeClassName="active-link">
              Home
            </NavLink>
          </div>
          <div className="link-wrapper">
            <NavLink to="/services" activeClassName="active-link">
              Services
            </NavLink>
          </div>
          <div className="link-wrapper">
            <NavLink to="/contact" activeClassName="active-link">
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
