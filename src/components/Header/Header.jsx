import React from "react";
import logo from "../../assets/img/Bitmap.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="nav">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav-item">
            <ul className="style-ul">
              <li className="style-li active">Services</li>
              <li className="style-li">About Us</li>
              <li className="style-li">Blogs</li>
              <li className="style-li">Case Studies</li>
              <button className="btn__contact">
                Contact Us
              </button>
            </ul>
          </div>
        </div>
        <div className="heading">
          <h4>How much Could You Save</h4>
        </div>
        <div className="header__para">
          <p>
            Answer the questions below to get a fixed price quotation for us to
            take your accountancy hassles away from you.
          </p>
        </div>
        <div className="turnover__box">
          <p className="turnover__para">
            Is your turnover expected to be more than £85k?
          </p>
          <button className="turnover__btn__right">Yes</button>
          <button className="turnover__btn__left">No</button>
        </div>
      </div>
    </>
  );
};

export default Header;
