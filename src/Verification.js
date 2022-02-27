import React from "react"; 
import { Row, Col } from "react-bootstrap";
import logo from "../src/images/logo.png"
const Verification = () => {
  return (
    <>
      <section className="authentication-wrapper">
        <Row>
          <Col lg={6}>
            <div className="left-side">
              <div className="logo-wrapper">
                <img src={logo} alt="logo" className="img-fluid" />
              </div>
              <h2 className="primary-heading"> VERIFICATION CODE</h2>
              <h3 className="secondary-heading">An email has been sent to you with a verification code.</h3>
              <h3 className="secondary-heading"> Please enter it here.</h3>
              <form action="/setpassword" className=" mt-5">
                <div className="registration-inp-box mt-5 mb-2">
                  <label className="d-block" for="code">VERIFICATION CODE <span className="text-danger">*</span> </label>
                  <div className="d-flex">
                    <input type="number" placeholder="0" className="input-type-code" />
                    <input type="number" placeholder="0" className="input-type-code" />
                    <input type="number" placeholder="0" className="input-type-code" />
                    <input type="number" placeholder="0" className="input-type-code" />
                  </div>
                  <div className="text-right mt-4">
                    <a className="primiry-link" href="/"><u>Resend Code</u></a>
                  </div>
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

export default Verification;
