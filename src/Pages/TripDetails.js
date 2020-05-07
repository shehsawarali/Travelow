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

class Tripdetails extends Component {
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
          <div className="text">Trip Name</div>
          <div className="text1">NOTE: contact travel agent directly</div>
        </div>

        <div className="TripTop">
          <img
            className="TripImage2"
            src={require("../Images/bhawalpur.png")}
          ></img>
          <TripData />
        </div>

        <TripProerties />

        <div className="Backgroundd">
          <div className="makeAFlex">
            <div className="AddPadiing">
              <div className="Itineary">
                <div className="ItinearyHeading">
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
            <Link to="/rateandreview">
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

export default Tripdetails;