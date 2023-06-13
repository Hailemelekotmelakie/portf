import React from "react";
import "../css/header.css";

function Header() {
  return (
    <div>
      <div className="header-main">
        <div className="n-left">
          <div className="myName">Hailemelekot</div>
          <div className="myName">Theme</div>
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
              <li className="n-list-item">Home</li>
              <li className="n-list-item">Services</li>
              <li className="n-list-item">Experiences</li>
              <li className="n-list-item">Contact</li>
              <li className="n-list-item">About</li>
            </ul>
          </div>
          <button className="btn contact">Contact</button>
          <div className="menu-icon-container">
            <div className="menu-icon"></div>
            <div className="menu-icon"></div>
            <div className="menu-icon"></div>
          </div>
        </div>
      </div>
      <div>
        <hr style={{ backgroundColor: "#fca61f", color: "white" }} />
      </div>
    </div>
  );
}
export default Header;
