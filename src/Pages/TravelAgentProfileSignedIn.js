// Page made by Ayesha
// CSS code can be found primarily in TravelAgentt.css and some in App.css

import React from "react";
import NavBar from "../Components/navbar";
import TravelAgentBar from "../Components/TravelAgentContactBar";
import MediaCard from "../Components/featuredTrip";
import UserReviewCard from "../Components/UserReview";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "../OtherCssFiles/TravelAgentt.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

export default class AgentProfileLoggedIn extends React.Component {
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
      <>
        <div>
          {/* sets up the top of the page */}
          <div class="hero-image-contact">
            <NavBar state={this.state} />
            <img
              className="TravelAgentProfilePicture "
              src={require("../Images/Travel agency.png")}
            ></img>
          </div>


          {/* these couple of lines give the compnay information */}
          <div className="CompanyName">Company Name</div>

          <div className="Address">Company address</div>

          <img
            className="starrating"
            src={require("../Images/5stars.png")}
          ></img>

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
              style={{
                color: "white",
                backgroundColor: "#0f1daf",
                left: "60%",
              }}
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
              style={{
                color: "white",
                backgroundColor: "#0f1daf",
                left: "62%",
              }}
            >
              See All
            </Button>
          </div>



          {/* tells about all the previous trips */}
          <div className="organize-cards">
            <MediaCard />
          </div>



          {/* all reviews can be seen by prssing this button. hasnt been implimeted yet */}
          <div className="MyReviews1">
            <h2>
              MY REVIEWS
              <Button
                variant="containedPrimary"
                style={{
                  color: "white",
                  backgroundColor: "#0f1daf",
                  left: "70%",
                }}
              >
                All Reviews
              </Button>
            </h2>
            {/* //user revirw are displayed here */}
            <UserReviewCard />
            <UserReviewCard />
          </div>
        </div>
        
        {/* this is the add trip button that leads to creating a new trip */}
        <div className="AddTripButton">
        <Link to="/uploadtrippage">
        <Fab color="primary" label="Add Trip">
          <AddIcon />
        </Fab>
        </Link>
        </div>
      </>
    );
  }
}
