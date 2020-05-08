import React, { Component } from "react";
// import { MdFormatAlignRight } from "react-icons/md";
import { Link } from "react-router-dom";
import firebase from "../config/fire";
import SearchBar2 from "./SearchBar2";
require("firebase/auth");

const database = firebase.firestore();

export default class navBar extends Component {
  //SHEHSAWAR
  constructor(props) {
    super(props);
    this.state = props.state;
    // console.log(this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.state !== this.state) {
      this.setState(nextProps.state);
      // console.log(nextProps.state);
    }
  }
  //   SHEHSAWAR
  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Logged out");
      })
      .catch((err) => {
        console.log("Error: " + err.toString());
      });
  }

  render() {
    if (this.state.username != null || this.state.username != "") {
      return (
        <nav>
          <ul>
            <li>
              <Link to="/">
                <div className="logo">TRAVELOW</div>
              </Link>
            </li>
            <li>
              <Link to="/trips">Trips</Link>
            </li>
            <li>
              <Link to="/travelagents">Travel Agents</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link to="/login">
                <div class="dropdown">
                  <div class="dropbtn">{this.state.display}</div>
                  <div class="dropdown-content">
                    <a>
                      <Link to="/user">Profile</Link>
                    </a>
                    <a onClick={this.logout}>Log Out</a>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav>
          <ul>
            <li>
              <Link to="/">
                <div className="logo">TRAVELOW</div>
              </Link>
            </li>
            <li>
              <Link to="/trips">Trips</Link>
            </li>
            <li>
              <Link to="/travelagents">Travel Agents</Link>
            </li>
            <li>
              <Link to="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link to="/login">{this.state.display}</Link>
            </li>
          </ul>
        </nav>
      );
    }
  }
}

// dropdown option for profile and logout after conditional rendering of login is done
{
  /* <Link to="/login">{this.state.display}
<div class="dropdown">
  <span>Mouse over me</span>
  <div class="dropdown-content">
    <p>Hello World!</p>
  </div>
</div>;
</Link> */
}
