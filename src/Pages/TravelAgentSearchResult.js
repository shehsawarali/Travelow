//page made by Ayesha
//css classes can be found in SearchFilterr.css and app.css

import React, { Component } from "react";
import NavBar from "../Components/navbar";
import "../OtherCssFiles/TravelAgentt.css";
import TravelAgentt from "../Components/TravelAgentCard";
// import TravelAgentFilter from "../Components/TravelAgentSearchResult";
import "../OtherCssFiles/SearchFilterr.css";

export default class TravelAgentSearchResult extends React.Component {
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
            <div className="SearchFilterpadding">
              <div className="BackgroundBox">
                <div className="SearchFilterHeadings">
                  Filter Your search by, <br></br>
                  Rating
                </div>

                <div className="SearchFilterText">
                  5 star<br></br>
                  between 4 and 5 star<br></br>
                  between 3 and 4 star<br></br>
                  between 2 and 3 star<br></br>
                  between 1 and 2 star
                </div>
              </div>
            </div>
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
