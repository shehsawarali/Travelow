import React, { Component } from "react";
import "../OtherCssFiles/Searchcard.css"

class Card extends Component {

  constructor(props){
    super(props);
    this.state = props.query;
  }

  render() {
      return (
        <div >
          <div class= "heading">
            Heading
          </div>

        <div className="pair">
        <div class= "tripby">
            Trip by<br></br>
          <img
          className="SmallUserProfilePic"
          src={require("../Images/TravelAgent.jpg")}
        ></img>
          </div>

        </div>
          
          <div class="tripinfo">
            Information
          </div>
        </div>
      );
    }  
    }
export default Card;
