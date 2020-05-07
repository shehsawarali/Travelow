// Page made by Ayesha
// all the Css code can be found in TravelAgentt.css

import React, { Component } from "react";
import Carddd from "./CardForTravelAgent";
import TravelAgentRating from "./TravelAgentRating";
import { Link } from "react-router-dom";
import "../OtherCssFiles/TravelAgentt.css";

class TravelAgentt extends Component {
  constructor(props) {
    super(props);
    // var siteLink;
    this.state = props.state;
    // if (this.state.userType == "Travel Agent") {
    //   siteLink = "/travelagentprofileloggedin";
    // } else if (this.state.userType == "Customer") {
    //   siteLink = "/travelagentprofilepublic";
    // }
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.state !== this.state) {
      this.setState(nextProps.state);
    }
  }

  render() {
    return (
      <div>
        <Link
          to="/travelagentprofileloggedin"
          style={{ textDecoration: "none", textTransform: "none" }}
          cond
        >
          <div className="TravelAgentSearchCard">
            <div className="CardInfoContainer">
              <img
                className="TravelAgencyImage"
                src={require("../Images/travelagent1.jpg")}
              ></img>

              <Carddd />

              <div className="AverageRating">
                <TravelAgentRating />
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default TravelAgentt;
