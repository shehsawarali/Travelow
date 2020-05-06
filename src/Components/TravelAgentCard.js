import React, { Component } from "react";
import Carddd from "./CardForTravelAgent"
import TravelAgentRating from "./TravelAgentRating"
import { Link } from "react-router-dom";
import "../OtherCssFiles/TravelAgentt.css"


class TravelAgentt extends Component {
  state = {};
  render() { 
      return(   
    <div >
        <Link to="/travelagentprofilepublic" style={{ textDecoration: "none", textTransform: "none"}}>
      
      <div className="TravelAgentSearchCard">
        
        <div className="CardInfoContainer">
          
          <img
            className="TravelAgencyImage"
            src={require("../Images/travelagent1.jpg")}
          ></img>
          
          <Carddd/>
          
          <div className="AverageRating">
          <TravelAgentRating/>
          </div>

        </div>
      </div>
      </Link>

    </div>
    
      
    );
  }
}

export default TravelAgentt ;
