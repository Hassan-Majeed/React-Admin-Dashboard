import React from "react";
import { FaSearch, FaArrowLeft } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import logo from "../src/images/logo.png"
const Forget = () => {
  return (
    <>
      <section className="authentication-wrapper">
        <Row>
          <Col lg={6}>
            <div className="left-side">
              <div className="logo-wrapper">
                <img src={logo} alt="logo" className="img-fluid" />
              </div>
              <h2 className="primary-heading"> FORGET PASSWORD </h2>
              <h3 className="secondary-heading">Enter your email address to receive a verification code</h3>
              <form action="/Verification" className=" mt-5">
                <div className="registration-inp-box mt-5 mb-2">
                  <label className="d-block" for="email">EMAIL ADDRESS <span className="text-danger">*</span> </label>
                  <input id="email" className="primary-inputs w-100" type="email" placeholder="admin@gmail.com" />
                </div>
                <div className="text-center mt-4">
                  <button className="main-btn">CONTINUE</button>
                </div>
                <div className="text-left mt-4">
                  <a className="primiry-link" href="/"><u>BACK TO LOGIN</u></a>
                </div>
              </form>
            </div>
          </Col>
          <Col className="d-lg-block d-none" lg={6}>
            <div className="right-side"></div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Forget;
