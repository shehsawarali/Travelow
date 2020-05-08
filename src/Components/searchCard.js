// Page made by Ayesha
// all the Css code can be found in SearchCard.css

import React, { Component } from "react";
import "../OtherCssFiles/Searchcard.css";
import Card from "./searchSubcard";
import { Link } from "react-router-dom";

class SearchResultbox extends Component {
  
  constructor(props){
    super(props);
    this.state = props.query;
  }
  
  render() {
    return (
      <div className="TripsSearchCard">
        {/* this card is being linked to a new page trip details so the whole card is responsive */}
         <Link
            to="/tripdetails" style={{ textDecoration: "none", textTransform: "none"}}
          >

          <div className="CardInfoContainer">
          {/* image of the trip */}
          <img
            className="TripImage"
            src={require("../Images/Hunzahotel.jpg")}
          ></img>

          {/* a card was imported */}
            <Card query={this.state}/>
          </div>

          {/* trip price is displayed and is the only thing that is right aligned */}
          
          <div className="TripPrice" >
            Trip Price
          </div>
        
        </Link>

      </div>
    );
  }
}

export default SearchResultbox;

