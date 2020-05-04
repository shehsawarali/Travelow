import React from "react";
import NavBar from "../Components/navbar";
import TripData from "../Components/TripData";
import TripProerties from "../Components/TripInfoBar";
import UserReviewCard from "../Components/UserReview";
import "../OtherCssFiles/Tripdetails.css";

export default function Home() {
  return (
    <div>
      <div class="hero-image-contact">
       <NavBar /> 
        <div className="text">Trip Name</div>
        <div className="text1">
            NOTE: contact travel agent directly
        </div>
      </div>

      <div className="TripTop">
            <img
            className="TripImage1"
            src={require("../Images/bhawalpur.png")}
            >
            </img>
            < TripData />
        </div>

        <TripProerties />

        <div>
        <img
            className="backgrougImage"
            src={require("../Images/MountainBachground.jpg")}
            >
            </img>
            
        </div>
        
        <div className="MyReviews">
        <h2>Reviews on previous trips</h2>
        <UserReviewCard />
        <UserReviewCard />
      </div>
        
    </div>
  );
}