// Page made by Ayesha
// all the Css code can be found in TravelAgentt.css

import React, { Component } from "react";
import "../OtherCssFiles/TravelAgentt.css";

class TravelAgentRating extends Component {
  constructor(props){
    super(props);
  }

  render() { 
      return(  
          <div>
              <div className="AverageRatingNumber">
                  {this.props.agent.rating}
                <img
                    className="Star"
                    src={require("../Images/YellowStar.png")}
                ></img>
                ({this.props.agent.numberOfRatings})
              </div>
          </div>      
    );
  }
}

export default TravelAgentRating;
