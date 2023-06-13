import React, { useState } from "react";
import Resume from "../asset/images/L O CV_Hailemelekot_Melakie Last.pdf";
import CV from "../asset/images/L O CV_Hailemelekot_Melakie Last.pdf";
import { motion } from "framer-motion";
import "./Services.css";

const Services = () => {
  const [move, setMove] = React.useState(false);

  const transition = {
    duration: 300,
    type: "spring",
  };
  return (
    <div className="services-container">
      <div className="s-left">
        <div className="my-awsome-services">
          <span className="stroke-text">My Awesome</span> <span className="l-services">Services</span>{" "}
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
        <motion.div
          animate={{ x: move ? 200 : -20 }}
          transition={{ duration: 5 }}
          onScroll={() => {
            setMove(!move);
          }}
          className="sliding-div div1"
        >
          Web Development
        </motion.div>
        <motion.div
          initial={{ top: 0, left: -70 }}
          whileInView={{ top: 0, left: 0 }}
          transition={transition}
          repeat={{ Infinity }}
          className="sliding-div div2"
        >
          Telegram Bot Development
        </motion.div>
        <motion.div
          initial={{ top: 0, left: 70 }}
          whileInView={{ top: 0, left: 0 }}
          transition={transition}
          className="sliding-div div3"
        >
          Website Development
        </motion.div>
        <motion.div
          initial={{ top: 0, left: -70 }}
          whileInView={{ top: 0, left: 0 }}
          transition={transition}
          className="sliding-div div4"
        >
          Mobile App Development
        </motion.div>
        <motion.div
          initial={{ top: 0, left: 70 }}
          whileInView={{ top: 0, left: 0 }}
          transition={transition}
          className="sliding-div div5"
        >
          Adobe Photoshop
        </motion.div>
        <motion.div
          initial={{ top: 0, left: -70 }}
          whileInView={{ top: 0, left: 0 }}
          transition={transition}
          className="sliding-div div6"
        >
          Website Deployment
        </motion.div>
        <motion.div
          initial={{ top: 0, left: 70 }}
          whileInView={{ top: 0, left: 0 }}
          transition={transition}
          className="sliding-div div7"
        >
          Software Development
        </motion.div>
      </div>
    </div>
  );
};
export default Services;
