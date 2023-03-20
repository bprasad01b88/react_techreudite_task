import React from "react";
import "./about.css";
import aboutImg from "../../assets/img/about.png";

const About = () => {
  return (
    <>
      <div className="about__container">
        <div className="about__positions">
          <div className="about__area">
            <div className="about__content">
              <h4 className="about__heading">About Us</h4>
              <p className="about__para">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
                sadipscing elitr
              </p>
              <span className="get__in__touch">
                <span className="span__text">Get In Touch</span>
              </span>
            </div>
            <div className="about__logo">
              <img src={aboutImg} alt="about" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
