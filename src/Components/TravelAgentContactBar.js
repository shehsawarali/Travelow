// Page made by Ayesha
// all the Css code can be found in Tripdetails.css

import React, { Component } from "react";
import "../OtherCssFiles/Tripdetails.css"

class TravelAgentBar extends Component {

  constructor(props){
    super(props);
  }
  
  render() {
    return (
    <div className="barr2">
      
      <div className="pair">
      <img
      className="imgg2"
      src={require("../Images/ContactUs.png")}>           
      </img>

      {this.props.agent.contactNo}

      </div>
      
      <div className="pair">
      <img
      className="imgg2"
      src={require("../Images/InternetSymbol.png")}>           
      </img>

      Unlisted 
      </div>
      <div className="pair">
      <img
      className="imgg2"
      src={require("../Images/EmailSymbol.png")}>           
      </img>

      {this.props.agent.email}

      </div>

      </div> 
    );
  }
}

export default TravelAgentBar;
