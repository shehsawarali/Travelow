//page made by Ayesha
//css classes can be found in SearchFilterr.css and app.css

import React, { Component } from "react";
import NavBar from "../Components/navbar";
import "../OtherCssFiles/TravelAgentt.css";
import TravelAgentt from "../Components/TravelAgentCard";
import TravelAgentFilter from "../Components/TravelAgentSearchResult";
import "../OtherCssFiles/SearchFilterr.css";

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
          <div className="text">SEARCH RESULT TRAVEL AGENT </div>
        </div>

        <div className="TripPageGrid">
        <div className="FilterAlignment">
        <TravelAgentFilter/>
        </div>
        

        <div className="MyReviews2">
        <TravelAgentt />
        <TravelAgentt />
        </div>
    </div>

      </div>
      
    );
  }
}

