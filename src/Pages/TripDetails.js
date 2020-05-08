//Page made by Ayesha
// css deatils can be found in tRipdrails.css in otherCssfiles folder

import React, { Component } from "react";
import NavBar from "../Components/navbar";
import TripData from "../Components/TripData";
import TripProerties from "../Components/TripInfoBar";
import UserReviewCard from "../Components/UserReview";
import "../OtherCssFiles/Tripdetails.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { render } from "@testing-library/react";
import { withRouter } from 'react-router-dom';
import { Route } from "react-router-dom";

class Tripdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.state,
      trip: this.props.location.state.trip
    }
    // console.log(this.props.trip);
    console.log(this.props.location.state);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.state !== this.state.user) {
      this.setState({user: nextProps.state});
    }
  }

  render() {
    return (
      <div>
        <div class="hero-image-contact">
          <NavBar state={this.state.user}/>
          <div className="text">{this.props.location.state.trip.location}</div>
          <div className="text1">By: {this.props.location.state.trip.vendorID}</div>
        </div>

        <div className="TripTop">
          <img
            className="TripImage2"
            src={require("../Images/bhawalpur.png")}
          ></img>
          <TripData trip={this.state.trip}/>
        </div>

        <TripProerties trip={this.state.trip}/>
        
        <div className="Backgroundd">
          <div className="makeAFlex">
            <div className="AddPadiing">
              <div className="Itinerary">
                <div className="ItineraryHeading">
                Itineary
                </div>   
                departure from lahore at 2 pm<br></br>
                day 1<br></br>            
                day 2<br></br> 
                day 3<br></br> 
                day 4<br></br> 
                day 5<br></br> 
                come back
              </div>

            </div>
            
          <img
            className="Accomodation"
            src={require("../Images/Hunzahotel.jpg")}
          ></img>

          </div>
        </div>

        <div className="MyReviews1">
          <h2>Reviews on previous trips
          <Link to={{
           pathname:'/ratetrip',
           state:{trip: this.state.trip}
          }}>
            <Button  //show this if customer is logged in
              variant="containedPrimary"
              style={{
                color: "white",
                backgroundColor: "#0f1daf",
                left: "50%",
              }}
            >
              Write Review
            </Button>
              </Link>
          </h2>
          <UserReviewCard />
          <UserReviewCard />
        </div>
      </div>
    );
  }
}

export default withRouter(Tripdetails);
