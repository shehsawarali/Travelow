//Page made by Ayesha 
// css deatils can be found in tRipdrails.css in otherCssfiles folder

import React, { Component } from "react";
import "../OtherCssFiles/Tripdetails.css"

class TripData extends Component {

  constructor(props){
    super(props);
  }
    render() {
        return (
          <div >
            <div className="boxpadding">
              <div className="box">
                Rs {this.props.trip.price}
              </div>
            </div>

            <div className="boxpadding">
              <div className="box">
                Number of seats: {this.props.trip.numberOfSeats}
              </div>
            </div>
            
            <div className="boxpadding">
              <div className="box">
                Dates: {this.props.trip.tripDates}<br></br>
                Departure from: Lahore
              </div>
            </div>
            
            <div className="boxpadding">
              <div className="box">
                <div className="TripTop1">
                  <img
                  className="SmallUserProfilePic1"
                  src={require("../Images/TravelAgent.jpg")}>
                  </img>
                  {this.props.trip.vendorID}
                </div>

                <button className="buttonColorTripDeets ">
                  contact us
                </button>
              
              </div>
            </div>
                       
          </div>
        );
      }  
    }
export default TripData;
