import React, { Component } from "react";

import sealCoating from "../../static/assets/workPhotos/sealCoating.jpg";
export default class Service extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="services">
        <div className="services-container">
          <div className="services-card">
            <div className="card-top">
              <header>Seal Coating</header>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                repellendus illum corrupti facere iure unde deserunt amet
                expedita aspernatur eos quo, quam cupiditate est quod repellat
                exercitationem! Quae, ducimus nulla?
              </p>
            </div>
            <div className="card-bottom">
              <img src={sealCoating} alt="service-image" />
            </div>
          </div>

          <div className="services-card">
            <div className="card-top">
              <div className="card-header">
                <header>Crack Filling</header>
                <div className="header-line"></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                repellendus illum corrupti facere iure unde deserunt amet
                expedita aspernatur eos quo, quam cupiditate est quod repellat
                exercitationem! Quae, ducimus nulla?
              </p>
            </div>
            <div className="card-bottom">
              <img src={sealCoating} alt="service-image" />
            </div>
          </div>

          <div className="services-card">
            <div className="card-top">
              <div className="card-header">
                <header>Asphalt Patching</header>
                <div className="header-line"></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                repellendus illum corrupti facere iure unde deserunt amet
                expedita aspernatur eos quo, quam cupiditate est quod repellat
                exercitationem! Quae, ducimus nulla?
              </p>
            </div>
            <div className="card-bottom">
              <img src={sealCoating} alt="service-image" />
            </div>
          </div>

          <div className="services-card">
            <div className="card-top">
              <div className="card-header">
                <header>Asphalt Paving</header>
                <div className="header-line"></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                repellendus illum corrupti facere iure unde deserunt amet
                expedita aspernatur eos quo, quam cupiditate est quod repellat
                exercitationem! Quae, ducimus nulla?
              </p>
            </div>
            <div className="card-bottom">
              <img src={sealCoating} alt="service-image" />
            </div>
          </div>

          <div className="services-card">
            <div className="card-top">
              <div className="card-header">
                <header>Parking Lot Striping</header>
                <div className="header-line"></div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
                repellendus illum corrupti facere iure unde deserunt amet
                expedita aspernatur eos quo, quam cupiditate est quod repellat
                exercitationem! Quae, ducimus nulla?
              </p>
            </div>
            <div className="card-bottom">
              <img src={sealCoating} alt="service-image" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
