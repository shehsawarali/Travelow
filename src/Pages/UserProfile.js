import React from "react";
import NavBar from "../Components/navbar";
import UserReviewCard from "../Components/UserReview";
import { Button } from "react-bootstrap";

export default function UserProfile() {
  return (
    <div>
      <div class="hero-image-contact">
        <NavBar />
        <div
          style={{ width: "70%", marginTop: "40px" }}
          className="AlignCenter"
        >
          <Button variant="primary" style={{ float: "left" }}>
            Edit Profile
          </Button>

          <Button variant="primary" style={{ float: "right" }}>
            Sign Out
          </Button>
        </div>

        <img
          className="UserProfilePic AlignCenter"
          src={require("../UserProfilePic.png")}
        ></img>

        <div name="user info" className="AlignCenter">
          <h2>Fatima Khan</h2>
          <h5>Joined 1 May 2020</h5>
        </div>
      </div>

      <div className="MyReviews">
        <h2>MY REVIEWS</h2>
        <UserReviewCard />
        <UserReviewCard />
      </div>
    </div>
  );
}
