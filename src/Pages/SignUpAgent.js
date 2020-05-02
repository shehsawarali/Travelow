import React from "react";
import { Link } from "react-router-dom";
import firebase from "../config/fire";
import "./SignUpAgent.css";

const database = firebase.firestore();

class SignUpAgent extends React.Component {
  signUp() {
    const emailaddress = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword");
    const companyName = document.getElementById("companyname").value;
    const companyOwner = document.getElementById("ownername").value;
    const CNIC = document.getElementById("CNIC").value;
    const contactNo = document.getElementById("contactNo").value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailaddress, password)
      .then((u) => {
        console.log("Signing up Agent");
        database.collection("Travel Agent").doc(emailaddress).set(
          {
            email: emailaddress,
            companyName: companyName,
            companyOwner: companyOwner,
            contactNo: contactNo,
            OwnerCNIC: CNIC,
          },
          { merge: true }
        );

        database.collection("Search Information").doc(emailaddress).set(
          {
            companyName: companyName,
            description: "",
            avg_rating: 0,
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
          margin: "auto",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          maxHeight: "85%",
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
            Sign Up as Agent
          </h3>

          <br></br>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <form>
              <div className="form-group text-left">
                <label htmlFor="exampleCompanytName">Company Name</label>
                <br></br>
                <input
                  type="text"
                  className="form-control"
                  id="companyname"
                  placeholder="Enter Company Name"
                  required
                />
              </div>

              <br></br>

              <div className="form-group text-left">
                <label htmlFor="exampleOwnerName">Owner/Manager Name</label>
                <br></br>
                <input
                  type="text"
                  className="form-control"
                  id="ownername"
                  placeholder="Enter Name"
                  required
                />
              </div>

              <br></br>

              <div className="form-group text-left">
                <label htmlFor="exampleCNIC">Owner/Manager CNIC Number</label>
                <br></br>
                <input
                  type="text"
                  className="form-control"
                  id="CNIC"
                  placeholder="e.g. 61101-1231234-0"
                  required
                />
              </div>

              <br></br>

              <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">
                  Company Email Address
                </label>
                <br></br>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter Email"
                  required
                />
              </div>

              <br></br>

              <div className="form-group text-left">
                <label htmlFor="exampleContactNumber">
                  Company Contact Number
                </label>
                <br></br>
                <input
                  type="text"
                  className="form-control"
                  id="contactNo"
                  placeholder="e.g. 03001234567"
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

              <br></br>
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
      </div>
    );
  }
}

export default SignUpAgent;