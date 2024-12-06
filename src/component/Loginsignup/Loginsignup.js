import React, { Component, useState, useRef, useEffect } from "react";
import email_icon from "../Asets/email.png";
import pass_icon from "../Asets/password.png";
import person_icon from "../Asets/person.png";

import "./loginlosignup.css";
import "../../index.css";
import App from "../../App";

const Loginsignup = () => {
  // inputref = React.createRef();
  const [action, setAction] = useState("Sign up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Log in" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={person_icon} alt=""></img>
            <input type="text" placeholder="name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt=""></img>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={pass_icon} alt=""></img>
          <input type="password" placeholder="password" />
        </div>
        {action === "Sign up" ? (
          <div></div>
        ) : (
          <div className="forgote-password">
            <span>fogot password?</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Log in" ? "submit grey" : "submit"}
            onClick={() => setAction("Sign up")}
          >
            Sign up
          </div>
          <div
            className={action === "Sign up" ? "submit grey" : "submit"}
            onClick={() => setAction("Log in")}
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginsignup;
