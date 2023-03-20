import React from "react";
import "./process.css";
import stepImg from "../../assets/img/steps.png";

const Process = () => {
  return (
    <>
      <div className="process__container">
        <h3 className="process__heading">Our Process</h3>
        <div>
          <div className="display__steps">
            <div className="step">
              <div className="stepImg">
                <img src={stepImg} alt="steps" />
              </div>
              <h6 className="step__content">Step1</h6>
              <p className="step__para">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor{" "}
              </p>
            </div>
            <div className="step">
              <div className="stepImg">
                <img src={stepImg} alt="steps" />
              </div>
              <h6 className="step__content2">Step2</h6>
              <p className="step__para2">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor{" "}
              </p>
            </div>
            <div className="step">
              <div className="stepImg">
                <img src={stepImg} alt="steps" />
              </div>
              <h6 className="step__content3">Step3</h6>
              <p className="step__para3">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
