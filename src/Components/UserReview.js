import React, { Component } from "react";


class UserReviewCard extends Component {
  state = {};
  render() {
    return (
      <div className="reviewCard">
        <div className="UserInfoContainer">
          <img
            className="SmallUserProfilePic"
            src={require("../Images/UserProfilePic.png")}
            style={{ marginTop: "1.5%", marginLeft: "1%"}}
          ></img>
          <div style={{marginTop: "-4%", marginLeft: "7%"}}>
          <b>Fatima Khan</b>&nbsp;wrote a review on 1 May 2020
          </div>
          
        </div>

        <div style={{marginTop: "-3.65%", marginLeft: "45%", paddingTop: "1%"}}>
          <img
            src={require("../Images/5stars.png")}
            style={{ width: "100px", height: "20px"}}
          ></img>
          </div>
          <div className="ReviewTextContainer" style={{ marginLeft: "7%"}}>
          <p>This is a sample review.</p>
        </div>
      </div>
    );
  }
}

export default UserReviewCard;
