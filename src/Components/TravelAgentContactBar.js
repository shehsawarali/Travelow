import React, { Component } from "react";
import "../OtherCssFiles/Tripdetails.css"

class TravelAgentBar extends Component {
    render() {
        return (
        <div className="barr2">
          
          <div className="pair">
          <img
          className="imgg2"
          src={require("../Images/ContactUs.png")}>           
          </img>

          Contact Number

          </div>
          
          <div className="pair">
          <img
          className="imgg2"
          src={require("../Images/InternetSymbol.png")}>           
          </img>

          website link
          </div>
          <div className="pair">
          <img
          className="imgg2"
          src={require("../Images/EmailSymbol.png")}>           
          </img>

          email

          </div>

          </div> 
        );
    }
}

export default TravelAgentBar;