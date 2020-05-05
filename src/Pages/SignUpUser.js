import React from "react";
import firebase from "../config/fire";
import { Link } from "react-router-dom";
import Background from "../Images/blurredMountains.png";
import "../OtherCssFiles/SignUpUser.css";

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
            position: "relative",
            width: "20%",
            border: "1px solid black",
            borderRadius: "10px 0px 0px 10px",
            backgroundColor: "whitesmoke",
            boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
            marginTop: "3%",
            marginBottom: "0%",
            minHeight: "640px",
            maxHeight: "640px",
          }}
        >
          <Link to="/">
            <button style={{ float: "right" }} className="button-style-1">
              X
            </button>
          </Link>

          <br></br>
          <br></br>

          <h3 style={{ display: "flex", justifyContent: "center" }}>
            Sign Up as Customer
          </h3>

          <br></br>

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
                  required
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
                  required
                />
              </div>

              <br></br>

              <div className="form-group text-left">
                <label htmlFor="exampleDoB">Date of Birth</label>
                <br></br>
                <input type="date" className="form-control" id="DoB" required />
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
                  required
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
                  required
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
                  required
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
                  required
                />
              </div>

              <br></br>

              <div className="form-group text-left">
                <label htmlFor="exampleProfilePicture">Profile Picture</label>
                <br></br>
                <input
                  type="file"
                  className="form-control image-input"
                  id="profilePicture"
                  accept="image/*"
                />
              </div>
            </form>
          </div>

          <br></br>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="button-style-1" onClick={this.signUp}>
              Submit
            </button>
          </div>

          <br></br>
        </div>
        <div
          style={{
            position: "relative",
            width: "20%",
            border: "1px solid black",
            borderRadius: "0px 10px 10px 0px",
            boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
            top: "0%",
            bottom: "0",
            marginTop: "3%",
            marginBottom: "3%",
            overflow: "Hidden",
            minHeight: "640px",
            maxHeight: "640px",
          }}
        >
          <img
            className=" "
            style={{ height: "100%" }}
            src={require("../Images/mainBackground.jpg")}
          ></img>
        </div>
      </div>
    );
  }
}

export default SignUpUser;
