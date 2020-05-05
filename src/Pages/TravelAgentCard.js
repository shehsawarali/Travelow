import React, { Component } from "react";
import "../OtherCssFiles/TravelAgentt.css"
import Carddd from "./CardForTravelAgent"
import { Link } from "react-router-dom";

class TravelAgentt extends Component {
  state = {};
  render() { 
      return(   
    <div className="RemoveHyper">
        <Link to="/travelagentprofilepublic">
      <div className="card1">
        <div className="UserInfoContainer1">
          <img
            className="TripImage"
            src={require("../Images/TravelAgent.jpg")}
          ></img>
          <Carddd/>
        </div>
      </div>
      </Link>

    </div>
    
      
    );
  }
}

export default TravelAgentt ;
