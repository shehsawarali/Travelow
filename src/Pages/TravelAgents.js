
import React, { Component } from "react";
import NavBar from "../Components/navbar";
import "../OtherCssFiles/TravelAgentt.css";
import TravelAgentt from "../Components/TravelAgentCard"

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
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
        <div class="hero-image-contact">
          <NavBar state={this.state} />
          <div className="text">ALL TRAVEL AGENTS</div>
        </div>

        <div className="MyReviews2">
        <TravelAgentt />
        <TravelAgentt />
      </div>

      </div>
      
    );
  }
}

