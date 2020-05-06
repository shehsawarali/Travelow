import React, { Component } from "react";
import "../OtherCssFiles/TravelAgentt.css"
import Carddd from "./CardForTravelAgent"
import TravelAgentRating from "./TravelAgentRating"
import { Link } from "react-router-dom";


class TravelAgentt extends Component {
  state = {};
  render() { 
      return(   
    <div >
        <Link to="/travelagentprofilepublic">
      <div className="card1">
        <div className="UserInfoContainer2">
          <img
            className="TripImage1"
            src={require("../Images/travelagent1.jpg")}
          ></img>
          <Carddd/>
          <div className="setting">
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
