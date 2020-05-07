// Page made by Ayesha
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
        <div class="hero-image-contact">
          <NavBar state={this.state}></NavBar>
          <img
            className="TravelAgentProfilePicture "
            src={require("../Images/Travel agency.png")}
          ></img>
        </div>

        <div className="CompanyName">Company Name</div>

        <div className="Address">Company address</div>

        <img className="starrating" src={require("../Images/5stars.png")}></img>

        <div className="Address">
          A short Company Description can be put here
        </div>

        <div className="padding">
          <TravelAgentBar />
        </div>

        <div className="Upcoming">
          Upcoming trips
          <Button
            variant="containedPrimary"
            style={{ color: "white", backgroundColor: "#0f1daf", left: "60%" }}
          >
            See All
          </Button>
        </div>

        <div className="organize-cards">
          <MediaCard />
        </div>

        <div className="Upcoming">
          Previous Trips
          <Button
            variant="containedPrimary"
            style={{ color: "white", backgroundColor: "#0f1daf", left: "62%" }}
          >
            See All
          </Button>
        </div>

        <div className="organize-cards">
          <MediaCard />
        </div>

        <div className="MyReviews1">
          <h2>
            REVIEWS
            <Link to="/rateandreview">
            <Button  //show this if customer is logged in
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
          </h2>
          <UserReviewCard />
          <UserReviewCard />
        </div>
      </div>
    );
  }
}
