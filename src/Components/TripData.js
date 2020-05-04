import React, { Component } from "react";
import "../OtherCssFiles/Tripdetails.css"

class TripData extends Component {
    render() {
        return (
          <div >
            <div className="boxpadding">
              <div className="box">
                PKR 21,500
              </div>
            </div>

            <div className="boxpadding">
              <div className="box">
                Seats remaining:10
              </div>
            </div>
            
            <div className="boxpadding">
              <div className="box">
                20th july 2020 to 15th july 2020
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
                  Global travel
                </div>

                <button className="buttonColor">
                  contact us
                </button>
              
              </div>
            </div>
                       
          </div>
        );
      }  
    }
export default TripData;
