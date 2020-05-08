// Page made by Ayesha
// all the Css code can be found in Tripdeatils.css

import React, { Component } from "react";
import "../OtherCssFiles/Tripdetails.css"

class  TripProerties extends Component {
    render() {
        return (
        <div className="barr">
          
          <div className="pair">
          <img
          className="imgg"
          src={require("../Images/tick.png")}>           
          </img>

          Family-friendly

          </div>
          
          <div className="pair">
          <img
          className="imgg"
          src={require("../Images/tick.png")}>           
          </img>

          Extreme
          </div>
          <div className="pair">
          <img
          className="imgg"
          src={require("../Images/tick.png")}>           
          </img>

          Camping

          </div>

          </div> 
        );
    }
}

export default TripProerties;
