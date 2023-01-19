import React,{useState} from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [valid, setValid] = useState({validName:true, validEmail:true,validNumber:true})

  const looksLikeMail=(inputEmail)=> {
    var lastAtPos = inputEmail.lastIndexOf("@");
    var lastDotPos = inputEmail.lastIndexOf(".");
    return (
      lastAtPos < lastDotPos &&
      lastAtPos > 0 &&
      inputEmail.indexOf("@@") === -1 &&
      lastDotPos > 2 &&
      inputEmail.length - lastDotPos > 2
    );
  }

  
  const updateValid = () => {
    setValid({
      validEmail: looksLikeMail(email) ? true : false,
      validName: fullName === "" ? false : true,
      validNumber: number.length !== 10 ? false : true
    });
  };

  
  const register=()=>{
    updateValid();
    
    // if all true the we send the data to backend/database 
    // sendData()
  }

  return (
    <>
      <div className="main1">
        <div className="container1">
          <div className="left1">
            <h1 className="heading">GET IN TOUCH</h1>
            <br />
            <p className="sub">
              Please complete the form and we will get back to you.
            </p>
          </div>
          <hr />
          <div className="right1">
            <div className="form">
              <label>Name*</label>
              <br />
              <input placeholder="Enter Your Name"  className={`name input ${!valid.validName ? "notValid": " "}`} type="text" value={fullName} onChange={(e)=>(setFullName(e.target.value))} ></input>
              <br /><br />
              <label>Email*</label>
              <br />
              <input placeholder="Enter Your Email" className={`input email ${!valid.validEmail ? "notValid": " "}`} type="email" value={email} onChange={(e)=>(setEmail(e.target.value))}></input>
              <br /><br />
              <label>Mobile Number*</label>
              <br />
              <input placeholder="Enter Your Mobile Number" className={`input mobileNumber ${!valid.validNumber ? "notValid": " "}`} type="number" value={number} onChange={(e)=>(setNumber(e.target.value))}></input>
              <br /><br />
              <button className="btn_blue" onClick={register}>Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
