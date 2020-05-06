import React, { Component } from "react";
import "../OtherCssFiles/TravelAgentt.css";

class TravelAgentRating extends Component {
  state = {};
  render() { 
      return(  
          <div>
              <div className="aaa" >
                Average Rating

              </div>
              <div className="rate">
                  3.5
                <img
                    className="Star"
                    src={require("../Images/Star.png")}
                ></img>
              </div>
          </div>      
    );
  }
}

export default TravelAgentRating;
