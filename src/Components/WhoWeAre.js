import React from "react";
import "./whoWeAre.css";

const WhoWeAre = () => {
  return (
    <>
      <div className="main">
        <h1>WHO WE ARE</h1>

        <div className="container">
          <div className="left">
            Rubixe<sup>TM</sup> is a global technology company specializing in
            disruptive technologies — Artificial Intelligence (Al), Machine
            Learning, Robotic Process Automation (RPA), BlockChain, and Internet
            of Things (IoT).
            <br />
            <br />
            Rubixe<sup>TM</sup> mission is to enable businesses to leverage the
            full potential of disruptive technologies and stay competitive in
            the market, turning complex challenges into solutions, providing a
            strategic competitive advantage that are more efficient, effective
            and predictable.
          </div>
          <div className="right">
            <img
              src="./whoweare.jpg"
              alt="header-img"
              className="whoWeAreimg"
            />
          </div>
        </div>
      </div>

      <div className="main2">
        <div className="main2_sub">
          <h1>WHERE WE STARTED</h1>

          <div className="container2">
            <div className="text">
              We started in 2015, With a passionate team who want to bring
              game-changing solutions through disrupting technologies. We
              expertise in delivering enterprise-level solutions in the field of
              Artificial Intelligence (Al), Cyber Security, Robotic Process
              Automation (RPA), Internet of Things (IoT), and BlockChain
              technology.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
