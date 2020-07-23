import React, { Component } from "react";
import banner1 from "../../static/assets/bannerImages/homeBanner1.jpg";
export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="home">
        <header>
          <div className="header">
            <img src={banner1} alt="Road close up" />
            <div className="home-title">
              <h1>
                Welcome <br />
                to Art's Asphalt Maintenance
              </h1>
              <h4>Your asphalt specialists since "1980" </h4>
            </div>
          </div>
        </header>
        <section>
          <div className="home-content">
            <h2>High quality work from a team you can trust</h2>
            <div className="home-line" />
            <h4>
              At Art's Asphalt Maintenance we put your satisfaction <br />
              as our 1# priority to guarantee a great customer experience.
            </h4>
          </div>
        </section>
      </div>
    );
  }
}
