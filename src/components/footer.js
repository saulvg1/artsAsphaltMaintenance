import React, { Component } from "react";
import logo from "../../static/assets/logo/logo.png";
import { unstable_batchedUpdates } from "react-dom";
export default class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="footer">
        <footer>
          <img src={logo} alt="Art's Asphalt Maintenance" />
        </footer>
        <div className="sv-media-wrapper">
          All rights reserved <br />
          website by
          <a href="https://www.svmedia.biz" target="_blank">
            SV Media
          </a>
        </div>
      </div>
    );
  }
}
