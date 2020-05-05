import React, { Component } from "react";
import "../OtherCssFiles/Searchcard.css"
import Card from "./card"
import { Link } from "react-router-dom";

class SearchResultbox extends Component {

  
  state = {};
  render() {
    return (
      <Link to="/tripdetails">
      <div className="card1">
        <div className="UserInfoContainer1">
          <img
            className="TripImage"
            src={require("../Images/hunza.png")}
          ></img>

          <Card/>
          price
          
        </div>
      </div>
      </Link>
    );
  }
}

export default SearchResultbox;
