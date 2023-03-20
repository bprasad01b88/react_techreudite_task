import React from "react";
import "./footer.css";
import logo from "../../assets/img/Bitmap.png";

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__section">
          <div className="footer__content">
            <h6 className="footer__heading">
              Tagline will go here. Lorem ipsum doler sit amet…
            </h6>
            <span className="footer__span">user@email.com</span>
          </div>
          <div className="footer__line"></div>
          <div className="footer__address">
            <h6 className="address">Address</h6>
            <p className="address__desc">
              101 Office No, <br /> Road name, <br /> India
            </p>
          </div>
          <div className="footer__contacts">
            <h6 className="address">Contact</h6>
            <p className="address__desc">
              user@email.com <br />
              (276) 341-7690
            </p>
          </div>
        </div>
        <div className="bottom__footer">
          <div className="footer__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer__links">
            <ul>
              <li>About</li>
              <li className="blogs">Blogs</li>
              <li className="contact">Contact</li>
              <li className="service">Service</li>
            </ul>
          </div>
          <div className="footer__copyright">
            <p>￼© 2022. All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
