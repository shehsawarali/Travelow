import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import firebase from "../config/fire";
import NavBar from "../Components/navbar";

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
        }}
      >
        <div
          style={{
            width: "20%",
            border: "4px solid blue",
            borderRadius: "25px",
          }}
        >
          <br></br>
          <h3 style={{ display: "flex", justifyContent: "center" }}>Login</h3>

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
            <Button variant="primary" onClick={this.logIn}>
              Submit
            </Button>
          </div>

          <br></br>
          <hr
            style={{ height: "2px", color: "blue", borderColor: "blue" }}
          ></hr>
          <br></br>
          <div style={{ display: "flex", justifyContent: "center" }}>
            Are you a new user?
          </div>
          <br></br>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/login/signup/user">
              <Button variant="primary">Sign Up as Customer</Button>
            </Link>
            <Link to="/login/signup/agent">
              <Button variant="primary">Sign Up as Agent</Button>
            </Link>
          </div>
          <br></br>
        </div>
        <div className="top-right">
          <Link to="/">X</Link>
        </div>
      </div>
    );
  }
}

export default Login;
