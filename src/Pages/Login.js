import React from "react";

import { Link } from "react-router-dom";
import firebase from "../config/fire";
import Background from "../Images/blurredMountains.png";
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
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          maxHeight: "100%",
          backgroundColor: "lightblue",
          backgroundImage: `url(${Background})`,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "20%",
            border: "4px solid #2B65EC",
            borderRadius: "0px 0px 0px 0px",
            backgroundColor: "white",
            boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
            top: "30%",
            bottom: "30%",
            minHeight: "300px",
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
                <br></br>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                />
              </div>

              <div className="form-group text-left">
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
            <Link to="/">
              <button className="button-style-1" onClick={this.logIn}>
                Login
              </button>
            </Link>
          </div>

          <br></br>

          <div style={{ display: "flex", justifyContent: "center" }}>
            Don't have an account? &nbsp;
            <Link to="/login/signup/user">Sign Up</Link>
          </div>
          <br></br>
        </div>
      </div>
    );
  }
}

export default Login;
