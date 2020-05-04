import React, { Component } from "react";
// import { MdFormatAlignRight } from "react-icons/md";
import { Link } from "react-router-dom";
import firebase from '../config/fire'
require('firebase/auth')

const database = firebase.firestore();

export default class navBar extends Component {
  
//SHEHSAWAR
  constructor(props){
    super(props);
    this.state = props.state;
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.state !== this.state) {
      this.setState(nextProps.state);
    }
  }
//   SHEHSAWAR
  
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
            <Link to="/login">{this.state.display}</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
