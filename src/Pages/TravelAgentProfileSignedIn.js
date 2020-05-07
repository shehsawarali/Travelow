// Page made by Ayesha
// CSS code can be found primarily in TravelAgentt.css and some in App.css

import React from "react";
import NavBar from "../Components/navbar";
import TravelAgentBar from "../Components/TravelAgentContactBar";
import MediaCard from "../Components/featuredTrip";
import UserReviewCard from "../Components/UserReview";
import "../OtherCssFiles/TravelAgentt.css";



export default class UserProfile extends React.Component {

  constructor(props){
    super(props);
    this.state = props.state;
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.state !== this.state) {
      this.setState(nextProps.state);
    }
  }

  render(){
    return (
      <div >
        <div class="hero-image-contact">
          <NavBar state={this.state}/>
          <img className="TravelAgentProfilePicture " src={require("../Images/Travel agency.png")}></img>
        </div>


        <div className="CompanyName">
              Company Name
        </div>
          
        <div className="Address">
              Company address
        </div>

        <img className="starrating" src={require("../Images/5stars.png")} ></img>

        <div className="Address">
              A short Company Description can be put here
        </div>

        <div className="padding">
        <TravelAgentBar />
        </div>

        <div className="Upcoming">
            Upcoming trips
        </div>

        <div className="organize-cards">
          <MediaCard />
        </div>

        <div className="Upcoming">
            Previous Trips
        </div>

        <div className="organize-cards">
          <MediaCard />
        </div>

        <div className="MyReviews1">
          <h2>MY REVIEWS</h2>
          <UserReviewCard />
          <UserReviewCard />
        </div>
       
      </div>
      

    );
  }
}