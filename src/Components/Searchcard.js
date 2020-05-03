import React, { Component } from "react";
import "./Searchcard.css"
import Card from "./card"

class SearchResultbox extends Component {
  state = {};
  render() {
    return (
      <div className="card1">
        <div className="UserInfoContainer">
          <img
            className="TripImage"
            src={require("../Images/hunza.png")}
          ></img>
          <Card/>
        </div>

      </div>
    );
  }
}

export default SearchResultbox;
