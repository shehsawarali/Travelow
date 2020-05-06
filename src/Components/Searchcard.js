import React, { Component } from "react";
import "../OtherCssFiles/Searchcard.css"
import Card from "./card"
import { Link } from "react-router-dom";

class SearchResultbox extends Component {

  
  state = {};
  render() {
    return (
      
      <div className="card1">
        <div className="UserInfoContainer1">
        <Link to="/tripdetails"><img
            className="TripImage"
            src={require("../Images/hunza.png")}
          ></img></Link>

          <Card/>
          price
          
        </div>
      </div>
      
    );
  }
}

export default SearchResultbox;
