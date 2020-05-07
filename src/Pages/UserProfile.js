import React from "react";
import NavBar from "../Components/navbar";
import UserReviewCard from "../Components/UserReview";
import Button from "@material-ui/core/Button";
import firebase from "../config/fire";
import { Link } from "react-router-dom";

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
    this.logout = this.logout.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.state !== this.state) {
      this.setState(nextProps.state);
    }
  }

  logout() {
    firebase
      .auth()
      .signOut()
      .then((result) => {
        this.setState({
          user: null,
        });
      });
  }

  render() {
    return (
      <div>
        <div class="hero-image-contact">
          <NavBar state={this.state} />
          <div
            style={{ width: "70%", marginTop: "40px" }}
            className="AlignCenter"
          >
            <Button
              variant="containedPrimary"
              style={{
                float: "left",
                color: "white",
                backgroundColor: "#0f1daf",
              }}
            >
              Edit Profile
            </Button>

            <Link to="/">
              <Button
                variant="outlinedPrimary"
                style={{
                  float: "right",
                  color: "white",
                  backgroundColor: "#0f1daf",
                }}
                onClick={this.logout}
              >
                Sign Out
              </Button>
            </Link>
          </div>

          <img
            className="UserProfilePic AlignCenter"
            src={require("../Images/UserProfilePic.png")}
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
}
