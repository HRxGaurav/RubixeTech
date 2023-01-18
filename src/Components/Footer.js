import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="main3">
        <div className="upper">
          <div className="upperDiv">
            <div className="firstCol cols">
              <h6 className="main_heading">ABOUT US</h6>
              <p className="para">
                Rubixe™ is a global technology company specializing in
                disruptive technologies – Artificial Intelligence (AI), Machine
                Learning, Robotic Process Automation (RPA), BlockChain and
                Internet of Things (IoT). Rubixe mission to enable businesses to
                leverage the full potential of disruptive technologies to stay
                competitive in the market.
              </p>
            </div>
            <div className="secondCol cols">
              <h6 className="main_heading">MENU</h6>
              <h2 className="foooter_list">Home</h2>
              <h2 className="foooter_list">Services</h2>
              <h2 className="foooter_list">Products</h2>
              <h2 className="foooter_list">Career</h2>
            </div>
            <div className="thirdCol cols">
              <h6 className="main_heading">LEARN MORE</h6>
              <h2 className="foooter_list">About</h2>
              <h2 className="foooter_list">Contact Us</h2>
            </div>
            <div className="forthCol cols">
              <h6 className="main_heading">ADDRESS</h6>
              <div className="address">
                Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru,
                Karnataka 560068
                <br />
                Phone: 0804-717-8999
                <br />
                Email: hi@rubixe.com
              </div>
              <h6 className="socMed">SOCIAL MEDIA</h6>
              <div className="socialIcon">
                <div>
                  <a
                    href="https://www.facebook.com/Rubixe.Official/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="./facebook.png"
                      alt="footer-facebook-img"
                      className="social facebook"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/company/rubixe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="./linkedin.png"
                      alt="footer-linkedin-img"
                      className="social linkedin"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p className="h1_footer">
            © Copyright 2017-2022 | Rubixe is a brand of THINK AHEAD INNOVATIONS
            PVT. LTD. I All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
