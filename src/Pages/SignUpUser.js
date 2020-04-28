import React from "react";
import { Button } from "react-bootstrap";
import firebase from "../config/fire";

const database = firebase.firestore();
const usersCollection = database.collection("Customer");

class SignUpUser extends React.Component {
  signUp() {
    const emailaddress = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword");
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("DoB").value;
    const contactNo = document.getElementById("contactNo").value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailaddress, password)
      .then((u) => {
        console.log("signing up user");
        usersCollection.doc(emailaddress).set(
          {
            email: emailaddress,
            firstName: firstName,
            lastName: lastName,
            contactNo: contactNo,
            dob: age,
          },
          { merge: true }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "20%",
            border: "4px solid blue",
            borderRadius: "25px",
          }}
        >
          <br></br>
          <h4 style={{ display: "flex", justifyContent: "center" }}>
            Sign Up as Customer
          </h4>

          {/*
          <h5>Sign Up As:</h5>

          <div class="radio">
            <label>
              <input type="radio" name="optradio" checked />
              Customer
            </label>
          </div>
          <div class="radio">
            <label>
              <input type="radio" name="optradio" />
              Travel Agent
            </label>
          </div>
        */}

          <div style={{ display: "flex", justifyContent: "center" }}>
            <form>
              <div className="form-group text-left">
                <label htmlFor="exampleFirstName">First Name</label>
                <br></br>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter First Name"
                />
              </div>

              <br></br>

              <div className="form-group text-left">
                <label htmlFor="exampleLaseName">Last Name</label>
                <br></br>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter Last Name"
                />
              </div>

              <br></br>

              <div className="form-group text-left">
                <label htmlFor="exampleDoB">Date of Birth</label>
                <br></br>
                <input type="date" className="form-control" id="DoB" />
              </div>

              <br></br>

              <div className="form-group text-left">
                <label htmlFor="exampleLaseName">Contact Number</label>
                <br></br>
                <input
                  type="number"
                  className="form-control"
                  id="contactNo"
                  placeholder="Enter Contact Number"
                />
              </div>

              <br></br>

              <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email Address</label>
                <br></br>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email Address"
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
                  placeholder="Enter Password"
                />
              </div>

              <br></br>

              <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <br></br>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Enter Password"
                />
              </div>
            </form>
          </div>

          <br></br>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="primary" onClick={this.signUp}>
              Submit
            </Button>
          </div>
          <br></br>
        </div>
      </div>
    );
  }
}

export default SignUpUser;
