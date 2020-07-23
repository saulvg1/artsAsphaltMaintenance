import React, { Component } from "react";
import logo from "../../static/assets/businessLogo.png";
export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar-wrapper">
        <div className="navbar-logo">
          <img src={logo} style={{}} />
        </div>
        <div className="links-wrapper">
          <a href="">page</a>
          <a href="">page</a>
          <a href="">page</a>
          <a href="">page</a>
        </div>
      </div>
    );
  }
}
