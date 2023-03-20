import React from "react";
import "./testimonials.css";
import userImg from "../../assets/img/user_img.png";

const Testimonials = () => {
  return (
    <>
      <div className="testimonial__container">
        <h3 className="testimonial__heading">Testimonials</h3>
        <div className="testimonial__section">
          <div className="testimonial__content">
            <div className="user__info">
              <div className="profile__img">
                <img src={userImg} alt="testimonial" />
              </div>
              <div className="username">
                <h6>Josh brollins</h6>
              </div>
            </div>
            <div className="testimonial__msg">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua
              </p>
            </div>
          </div>
          <div className="testimonial__content">
            <div className="user__info">
              <div className="profile__img">
                <img src={userImg} alt="testimonial" />
              </div>
              <div className="username">
                <h6>Josh brollins</h6>
              </div>
            </div>
            <div className="testimonial__msg">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
