// Page made by Ayesha
// all the Css code can be found in TravelAgentt.css

import React, { Component } from "react";
import Card from "./CardForTravelAgent";
import TravelAgentRating from "./TravelAgentRating";
import { Link } from "react-router-dom";
import "../OtherCssFiles/TravelAgentt.css";

class TravelAgentt extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.agent;
    if (this.state.profilePictureURL) {
      this.setState({ url: this.state.profilePictureURL });
    } else {
      this.setState({ url: "../Images/travelagent1.jpg" });
    }
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
          to="/travelagentprofile"
          style={{ textDecoration: "none", textTransform: "none" }}
          cond
        >
          <div className="TravelAgentSearchCard">
            <div className="CardInfoContainer">
              <img
                className="TravelAgencyImage"
                src={require("../Images/travelagent1.jpg")}
              ></img>

              <Card agent={this.props.agent} />

              <div className="AverageRating">
                <TravelAgentRating agent={this.props.agent} />
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default TravelAgentt;
