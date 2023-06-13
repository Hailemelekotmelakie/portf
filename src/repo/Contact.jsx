import React from "react";
import "../css/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="c-left">
        <span className="get-in-touch">Get In Touch</span>
        <span className="contact-us">Contact Us</span>
      </div>
      <div className="c-right">
        <input type="text" className="c-text" placeholder="Your Name"></input>
        <input
          type="email"
          className="c-email"
          placeholder="Your email address"
        ></input>
        <button className="btn send-contact">Send</button>
      </div>
    </div>
  );
}
export default Contact;
