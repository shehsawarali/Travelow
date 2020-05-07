// Page made by Ayesha
// all the Css code can be found in TravelAgentt.css

import React, { Component } from "react";
import "../OtherCssFiles/TravelAgentt.css";

class TravelAgentRating extends Component {
  state = {};
  render() { 
      return(  
          <div>
              <div className="averageRatingText" >
                Average Rating

              </div>
              <div className="AverageRatingNumber">
                  3.5
                <img
                    className="Star"
                    src={require("../Images/YellowStar.png")}
                ></img>
              </div>
          </div>      
    );
  }
}

export default TravelAgentRating;
