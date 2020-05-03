import React from "react";

import { Link } from "react-router-dom";
import firebase from "../config/fire";
import "../OtherCssFiles/Login.css";

const database = firebase.firestore();

class Login extends React.Component {
  logIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log("Successfully Logged in");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          margin: "auto",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          maxHeight: "53%",
        }}
      >
        <div
          style={{
            width: "20%",
            border: "4px solid mediumblue",
            backgroundColor: "whitesmoke",
            boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
          }}
        >
          <Link to="/">
            <button style={{ float: "right" }} className="button-style-1">
              X
            </button>
          </Link>

          <br></br>
          <br></br>

          <h3
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Login
          </h3>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <form>
              <div className="form-group text-left">
                <label htmlFor="exampleInputUsername">Email</label>
                <br></br>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <br></br>

              <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <br></br>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
            </form>
          </div>

          <br></br>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="button-style-1" onClick={this.logIn}>
              Submit
            </button>
          </div>

          <br></br>

          <div style={{ backgroundColor: "" }}>
            <hr
              style={{
                border: "none",
                borderTop: "1px solid mediumblue",
              }}
            ></hr>
            <br></br>

            <div style={{ display: "flex", justifyContent: "center" }}>
              Are you a new user?
            </div>
            <br></br>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Link to="/login/signup/user">
                <button className="button-style-1">Sign Up as Customer</button>
              </Link>

              <Link to="/login/signup/agent">
                <button className="button-style-1">Sign Up as Agent</button>
              </Link>
            </div>

            <br></br>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;