import React, { Component } from "react";
// import { MdFormatAlignRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default class navBar extends Component {
  render() {
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
            <Link to="/login">Login/Sign Up</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
