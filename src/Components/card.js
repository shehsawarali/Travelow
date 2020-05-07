import React, { Component } from "react";
import "../OtherCssFiles/Searchcard.css"

class Card extends Component {

  constructor(props){
    super(props);
    this.state = props.trip;
  }

  render() {
      return (
        <div >
          <div class= "heading">
            {this.state.location}
          </div>

        <div className="pair">
        <div class= "tripby">
            {this.state.tripDates}<br></br>
          <img
          className="SmallUserProfilePic"
          src={require("../Images/TravelAgent.jpg")}
        ></img>
          </div>

        </div>
          
          <div class="tripinfo">
            Number of seats:  {this.state.numberOfSeats}
          </div>
        </div>
      );
    }  
    }
export default Card;
