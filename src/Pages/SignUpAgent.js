import React from "react";
import { Button } from "react-bootstrap";

export default function SignUpUser() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{ width: "20%", border: "4px solid blue", borderRadius: "25px" }}
      >
        <br></br>
        <h4 style={{ display: "flex", justifyContent: "center" }}>
          Sign Up as Agent
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
              <label htmlFor="exampleCompanytName">Company Name</label>
              <br></br>
              <input
                type="text"
                className="form-control"
                id="companyname"
                placeholder="Enter Company Name"
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
              />
            </div>

            <br></br>

            <div className="form-group text-left">
              <label htmlFor="exampleInputEmail1">Company Email Address</label>
              <br></br>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
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
                id="contactnumber"
                placeholder="e.g. 03001234567"
              />
            </div>

            <br></br>

            <div className="form-group text-left">
              <label htmlFor="exampleInputUsername">Usename</label>
              <br></br>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter Username"
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
          <Button variant="primary">Submit</Button>
        </div>
        <br></br>
      </div>
    </div>
  );
}
