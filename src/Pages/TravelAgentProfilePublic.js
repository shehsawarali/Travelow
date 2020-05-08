// CSS code can be found primarily in TravelAgentt.css and some in App.css

import React from "react";
import NavBar from "../Components/navbar";
import TravelAgentBar from "../Components/TravelAgentContactBar";
import MediaCard from "../Components/featuredTrip";
import UserReviewCard from "../Components/UserReview";
import "../OtherCssFiles/TravelAgentt.css";
import { Link } from "react-router-dom";
import SearchBar2 from "../Components/SearchBar2";
import Button from "@material-ui/core/Button";

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    var showButton = false;
    this.state = props.state;
    if (this.state.userType == "Customer") {
      showButton = true;
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
        {/* sets up the top of the page */}
        <div class="hero-image-contact">
          <NavBar state={this.state}></NavBar>
          <img
            className="TravelAgentProfilePicture "
            src={require("../Images/Travel agency.png")}
          ></img>
        </div>
        
        
        
        {/* these couple of lines give the compnay information */}
        <div className="CompanyName">Company Name</div>

        <div className="Address">Company address</div>

        <img className="starrating" src={require("../Images/5stars.png")}></img>

        <div className="Address">
          A short Company Description can be put here
        </div>
        
        
        
        {/* this bar contains the contact information of the company as a flex */}
        <div className="padding">
          <TravelAgentBar />
        </div>
        
        
        
        <div className="Upcoming">
          Upcoming trips
          {/* button to see all upcoming trips is not implimented as it was not part of our
          use cases but it might be a fuctionality that can be added later */}
          <Button
            variant="containedPrimary"
            style={{ color: "white", backgroundColor: "#0f1daf", left: "60%" }}
          >
            See All
          </Button>
        </div>
        
        
        
        
        {/* tells about all the upcoming trips */}
        <div className="organize-cards">
          <MediaCard />
        </div>

        
        
        <div className="Upcoming">
          Previous Trips
          {/* button to see all previous trips is not implimented as it was not part of our
          use cases but it might be a fuctionality that can be added later */}
          <Button
            variant="containedPrimary"
            style={{ color: "white", backgroundColor: "#0f1daf", left: "62%" }}
          >
            See All
          </Button>
        
        
       
       
        </div>
          {/* tells about all the previous trips */}
        <div className="organize-cards">
          <MediaCard />
        </div>

       
          {/* these are all the reviews this travel agent has */}
        <div className="MyReviews1">
          <h2>
            REVIEWS
            <Link to="/rateandreview">
            <Button  //show this if customer is logged in and then they can also add a review
              variant="containedPrimary"
              style={{
                color: "white",
                backgroundColor: "#0f1daf",
                left: "60%",
              }}
            >
              Write Review
            </Button>
              </Link>
            {/* all reviews can be seen by prssing this button. hasnt been implimeted yet */}
            <Button
              variant="containedPrimary"
              style={{
                color: "white",
                backgroundColor: "#0f1daf",
                left: "63%",
              }}
            >
              All Reviews
            </Button>

            {/* //user revirw are displayed here */}
          </h2>
          <UserReviewCard />
          <UserReviewCard />
        </div>
      </div>
    );
  }
}
