// Page made by Ayesha
// all the Css code can be found in SearchCard.css

import React, { Component } from "react";
import "../OtherCssFiles/Searchcard.css"
import Card from "./card"
import { Link } from "react-router-dom";

class SearchResultbox extends Component {

  
  state = {};
  render() {
    return (
     

      <div className="TripsSearchCard">
         <Link
            to="/tripdetails" style={{ textDecoration: "none", textTransform: "none"}}
          >

        <div className="CardInfoContainer">

          <img
            className="TripImage"
            src={require("../Images/hunza.png")}
          ></img>

          
            <Card />
          
          <div className="TripPrice" >
          Price: PKR 10000
          </div>

          
        </div>
        </Link>

      </div>
      
    );
  }
}

export default SearchResultbox;
