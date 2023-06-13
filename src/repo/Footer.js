import React from "react";
import DTULogo from "./logo192.png";
import MyPhoto from "./logo192.png";
import Facebook from "./logo192.png";

import "../css/footer.css";

function Footer() {
  return (
    <div
      style={{ padding: "-10px -1000px -10px -1000px" }}
      className="footer-div"
    >
      <hr style={{ background: "#fca61f", borderTopColor: "#fca61f" }} />
      <div className="footerAbove">
        <h4>Location: Injibara, Ethiopia</h4>
        <h4>
          Phone: <a href="tel:+251947053537">+251 947 053 537</a>
        </h4>
        <h4 href="mailto:hailemelekotmelakie1991@gmail.com">
          Mail: hailemelekotmelakie1991@gmail.com
        </h4>
      </div>
      <div className="footerBelow">
        <h3>I wish to hear from you!!</h3>
        <span>
          <a href="mailto:hailemelekotmelakie1991@gmail.com">
            <img className="footerIcon" src={Facebook} alt="Logo" />
          </a>
        </span>
        <span>
          <a href="mailto:hailemelekotmelakie1991@gmail.com">
            <img className="footerIcon" src={MyPhoto} alt="Logo" />
          </a>
        </span>
        <span>
          <a href="mailto:hailemelekotmelakie1991@gmail.com">
            <img className="footerIcon" src={DTULogo} alt="Logo" />
          </a>
        </span>
        <span>
          <a href="mailto:hailemelekotmelakie1991@gmail.com">
            <img className="footerIcon" src={MyPhoto} alt="Logo" />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
