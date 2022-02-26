import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import logo from "../src/images/logo.png"
import { useState } from "react";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <>
      <section className="authentication-wrapper">
        <Row>
          <Col lg={6}>
            <div className="left-side">
              <div className="logo-wrapper">
                <img src={logo} alt="logo" className="img-fluid" />
              </div>
              <h2 className="primary-heading"> ADMIN LOGIN</h2>
              <h3 className="secondary-heading">Login your cadential to continue</h3>
              <form action="/dashboard">
                <div className="registration-inp-box mt-5 mb-2">
                  <label className="d-block" for="userName">USERNAME</label>
                  <input id="userName" className="primary-inputs w-100" type="text" placeholder="Admin" />
                </div>
                <div className="registration-inp-box mb-2">
                  <label className="d-block" for="password">PASSWORD</label>
                  <div className="position-relative">
                    <input id="password" className="primary-inputs w-100" type={passwordShown ? "text" : "password"} placeholder="********" />
                    <button class="position-absolute show-password" type="button" onClick={togglePassword}  >
                      {passwordShown ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <a className="primiry-link" href="/forget"><u>FORGET PASSWORD?</u></a>
                </div>
                <div className="text-center mt-3">
                  <button className="main-btn">LOGIN</button>
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

export default Login;
