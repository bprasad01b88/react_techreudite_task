import React from "react";
import "./services.css";
import auditImg from "../../assets/img/shape1.png";
import budgetImg from "../../assets/img/shape2.png";
import payrollImg from "../../assets/img/shape3.png";
import softwareImg from "../../assets/img/shape4.png";
import taxImg from "../../assets/img/shape5.png";
import managementImg from "../../assets/img/shape6.png";
const Service = () => {
  return (
    <>
      <div className="container">
        <h3>Services</h3>
        <div className="section__content">
          <div className="content__row_1">
            <div className="display">
              <img src={auditImg} alt="audit" className="logo__img" />
              <h6 className="heading__service audit_wid">Audit & Account</h6>
              <p className="heading__para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="display">
              <img src={budgetImg} alt="budget" className="logo__img" />
              <h6 className="heading__service budget__wid">
                Budget & Projections
              </h6>
              <p className="heading__para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="display">
              <img src={payrollImg} alt="payroll" className="logo__img" />
              <h6 className="heading__service payroll__wid">
                Payroll & Bookkeeping
              </h6>
              <p className="heading__para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </div>
          <div className="content__row_2">
            <div className="display">
              <img src={softwareImg} alt="software" className="logo__img" />
              <h6 className="heading__service software__wid">
                Software Training & IT
              </h6>
              <p className="heading__para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="display">
              <img src={taxImg} alt="tax" className="logo__img" />
              <h6 className="heading__service tax__wid">
                Tax Planning & Returns
              </h6>
              <p className="heading__para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className="display">
              <img src={managementImg} alt="management" className="logo__img" />
              <h6 className="heading__service management__wid">
                Management Information
              </h6>
              <p className="heading__para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
