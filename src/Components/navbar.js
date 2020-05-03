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
    this.state = {
      display: null
    }
  }
  
  componentDidMount(){
    firebase.auth().onAuthStateChanged((obj) => {
      if(obj) {
        this.setState({display: obj.email});
      }
      else{
        this.setState({display: "Login/Signup"})
      }
    })
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
            <Link to="/trips">TRIPS</Link>
          </li>
          <li>
            <Link to="/travelagents">TRAVEL AGENTS</Link>
          </li>
          <li>
            <Link to="/contactus">CONTACT US</Link>
          </li>
          <li>
            <Link to="/login">{this.state.display}</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
