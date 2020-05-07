//Page made by Ayesha 
// css deatils can be found in tRipdrails.css in otherCssfiles folder

import React, { Component } from "react";
import { Link } from "react-router-dom";
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

                <Link to="/travelagentprofilepublic">
                <button  className="buttonColorTripDeets ">
                  View Profile
                </button>
              </Link>


              
              </div>
            </div>
                       
          </div>
        );
      }  
    }
export default TripData;
