import React from "react";
import { useState, useRef } from "react";
import "./page.css";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Signin({ formData, setFormData }) {
  const [status] = useState("Log In");
  const [signup, setSignUp] = useState(false);
  const [loggedin, setLoggedIn] = useState(true);
  const user = useRef(null);
  const pass = useRef(null);
  const navigate = useNavigate();
  const handleClick = e => {
    e.preventDefault();
    if (
      loggedin === true &&
      pass.current.value !== "" &&
      user.current.value !== ""
    ) {
      navigate("/dashboard");
    } else {
      setLoggedIn(false);
      alert("please fill in username and password");
      return false;
    }
  };

  const handleKeyUp = e => {
    if (
      loggedin === true &&
      user.current.value !== "" &&
      pass.current.value !== "" &&
      e.key === "Enter"
    ) {
      setFormData("");

      navigate("/dashboard");
      setFormData("");
    }
  };

  const handleSignUp =(e)=>{
  e.preventDefault();
  if (
    loggedin === true &&
    pass.current.value !== "" &&
    user.current.value !== ""
  ) {
    setSignUp(false)
  } else {
    setLoggedIn(false);
    alert("please fill in username and password");
    return false;
  }
}

  const handleShowPasword = e => {
    if (pass.current.type === "password") {
      pass.current.type = "text";
    } else {
      pass.current.type = "password";

      return false;
    }
  };
  return (
    <div className="page">
      {signup ? (
        <div className="register">
          <h1>{status === "Log In" ? "Sign Up" : "Sign Up"}</h1>
          <h2>Let's get you signed up first</h2>
          <form onSubmit={handleSignUp} className="form" action="">
            <br />
            <input
              ref={user}
              onChange={e => setFormData(e.target.value)}
              value={formData.username}
              type="text"
              placeholder="Username"
            />
            <input
              ref={pass}
              onChange={e => setFormData(e.target.value)}
              value={formData.password}
              type="password"
              placeholder="Password"
            />

            <span className="eyes">
              <FaEye className="eyebtn" onClick={handleShowPasword} />
            </span>

            <button className="button" type="submit">
              Sign Up
            </button>
          </form>
          <h4>
            Already have an account?
            <span className="reg" onClick={() => setSignUp(false)}>
              Login Here
            </span>
          </h4>
        </div>
      ) : (
        <div className="login">
          <h1>{status}</h1>
          <h2>Let's Login to your account first</h2>
          <form onSubmit={handleClick} className="form" action="">
            <br />
            <input
              ref={user}
              onChange={event => {
                setFormData({ ...formData, username: event.target.value });
              }}
              type="text"
              value={formData.username}
              placeholder="Username"
            />
            <input
              onChange={event =>
                setFormData({ ...formData, password: event.target.value })
              }
              onKeyUp={handleKeyUp}
              type="password"
              ref={pass}
              placeholder="Password"
              value={formData.password}
            />
            <span className="eyes">
              <FaEye onClick={handleShowPasword} className="eyebtn" />
            </span>
            <button className="button first-line:" type="submit">
              Login
            </button>
          </form>
          <h4>
            Don't have an account?
            <span className="reg" onClick={() => setSignUp(true)}>
              Register Here
            </span>
          </h4>
        </div>
      )}
    </div>
  );
}

export default Signin;
