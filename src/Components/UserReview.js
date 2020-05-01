import React, { Component } from "react";
class UserReviewCard extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="UserInfoContainer">
          <img
            className="SmallUserProfilePic"
            src={require("../UserProfilePic.png")}
          ></img>
          <b>Fatima Khan</b>&nbsp;wrote a review on 1 May 2020
        </div>

        <div className="ReviewTextContainer">
          <img
            src={require("../5stars.png")}
            style={{ width: "100px", height: "20px" }}
          ></img>

          <p>This is a sample review.</p>
        </div>
      </div>
    );
  }
}

export default UserReviewCard;
