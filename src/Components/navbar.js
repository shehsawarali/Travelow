import React, { Component } from "react";
// import { MdFormatAlignRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default class navBar extends Component {
  // state = {
  //   isOpen: false,
  // };

  // handleToggle = () => {
  //   this.setState({ isOpen: !this.state.isOpen });
  // };

  render() {
    return (
      // <nav className="navbar">
      //   <div className="container">
      //     <div className="nav-header">
      //       <Link to="/">
      //         <h4>TRAVELOW</h4>
      //       </Link>
      //       <button
      //         type="button"
      //         className="nav-btn"
      //         onClick={this.handleToggle}
      //       >
      //         <MdFormatAlignRight className="nav-icon" />
      //       </button>
      //       <ul
      //         className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
      //       >
      //         <li>
      //           <Link to="/trips">Trips</Link>
      //         </li>
      //         <li>
      //           <Link to="/travelagents">Travel Agents</Link>
      //         </li>
      //         <li>
      //           <Link to="/contactus">Contact Us</Link>
      //         </li>
      //         <li>
      //           <Link to="/login">Login/Sign Up</Link>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
      // <nav className="navbar">
      //   <div className="container">
      //     <div className="nav-header">
      //       <Link to="/">
      //         <img src={require("./TRAVELOW.png")} width='90' height='15'></img>
      //       </Link>
      //     </div>
      //     <div className="nav-header">
      //       <ul className="nav-links">
      //         <li float="right">
      //           <Link to="/trips">Trips</Link>
      //         </li>
      //         <li>
      //           <Link to="/travelagents">Travel Agents</Link>
      //         </li>
      //         <li>
      //           <Link to="/contactus">Contact Us</Link>
      //         </li>
      //         <li>
      //           <Link to="/login">Login/Sign Up</Link>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>

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
