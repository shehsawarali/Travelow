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
            <Link to="/trips">TRIPS</Link>
          </li>
          <li>
            <Link to="/travelagents">TRAVEL AGENTS</Link>
          </li>
          <li>
            <Link to="/contactus">CONTACT US</Link>
          </li>
          <li>
            <Link to="/login">LOGIN/SIGN UP</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
