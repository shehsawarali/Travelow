import React, { Component } from "react";
import "../OtherCssFiles/Searchcard.css"

class Card extends Component {
    render() {
        return (
          <div >
            <div class= "heading">
              Trip Name
            </div>

          <div className="pair">
          <div class= "tripby">
              Company Name<br></br>
            <img
            className="SmallUserProfilePic"
            src={require("../Images/TravelAgent.jpg")}
          ></img>
            </div>

          </div>
            
            <div class="tripinfo">
              Here we will put trip info...
            </div>
          </div>
        );
      }  
    }
export default Card;
