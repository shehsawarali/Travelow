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

          Suitable for families

          </div>
          
          <div className="pair">
          <img
          className="imgg"
          src={require("../Images/tick.png")}>           
          </img>

          Hiking
          </div>
          <div className="pair">
          <img
          className="imgg"
          src={require("../Images/tick.png")}>           
          </img>

          hotel stay

          </div>

          </div> 
        );
    }
}

export default TripProerties;