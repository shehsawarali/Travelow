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
         <Link
            to="/tripdetails" style={{ textDecoration: "none", textTransform: "none"}}
          >

        <div className="CardInfoContainer">

          <img
            className="TripImage"
            src={require("../Images/hunza.png")}
          ></img>

          
            <Card query={this.state}/>
          
          
          <div className="TripPrice" >
            Trip Price
          </div>

          
        </div>
        </Link>

      </div>
    );
  }
}

export default SearchResultbox;

