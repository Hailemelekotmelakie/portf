import React from "react";
import Resume from "./logo192.png";
import CV from "./logo192.png";

import "../css/Services.css";

function Services() {
  return (
    <div className="services-container">
      <div className="s-left">
        <div className="my-awsome-services">
          My Awesome <span className="l-services">Services</span>
        </div>
        <div className="cv-resume">
          <a className="cv-resume-link" href={Resume} download>
            <button className="btn btn-cv">Download Resume</button>
          </a>
          <a className="cv-resume-link" href={CV} download>
            <button className="btn btn-cv">Download CV</button>
          </a>
        </div>
      </div>
      <div className="s-right">
        <div className="sliding-div div1">Web Development</div>
        <div className="sliding-div div2">Telegram Bot Development</div>
        <div className="sliding-div div3">Website Development</div>
        <div className="sliding-div div4">Mobile App Development</div>
        <div className="sliding-div div5">Adobe Photoshop</div>
        <div className="sliding-div div6">Website Deployment</div>
        <div className="sliding-div div7">Software Development</div>
      </div>
    </div>
  );
}
export default Services;
