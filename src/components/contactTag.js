import React, { Component } from "react";
export default class ContactTag extends Component {
  render() {
    return (
      <div id="contact-tag">
        <a href="tel:+9999999999">
          <i className="fas fa-mobile"></i>
          Call Us <br />
          Today
        </a>
      </div>
    );
  }
}
