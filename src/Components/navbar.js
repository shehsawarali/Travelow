import React, { Component } from "react";
import { FcMenu } from "react-icons/fc";
import { Link } from "react-router-dom";

export default class navBar extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="Navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <h4>TRAVELOW</h4>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FcMenu className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
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
        </div>
      </nav>
    );
  }
}
