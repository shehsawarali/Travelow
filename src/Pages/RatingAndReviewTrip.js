import React from "react";
import NavBar from "../Components/navbar";
import firebase from "../config/fire";
import "../OtherCssFiles/RatingAndReview.css";
import * as timestamp from 'firebase';

const database = firebase.firestore();

class WriteReview extends React.Component {
  postReview(){
    const reviewText = document.getElementById("reviewText").value;
    const givenRating = document.getElementById("givenRating")
    database.collection("Trip").doc(this.state.trip.tripID)
    .collection("Reviews").add({
      reviewerID: this.state.user.useremail,
      reviewText: reviewText,
      givenRating: givenRating,
      reviewDate: timestamp.firestore.Timestamp.fromDate(new Date()),
    })
    .then(() => {
        database.collection("Travel Agent").doc(this.state.trip.vendorID)
        .collection("Trip Reviews").add({
            reviewerID: this.state.user.useremail,
            reviewText: reviewText,
            givenRating: givenRating,
            reviewDate: timestamp.firestore.Timestamp.fromDate(new Date()),
        })
        console.log("done")
    })
    .catch((error) => {
      console.error("Review error: ", error)
    });
  }

  constructor(props){
    super(props);
    this.state = {
      user: this.props.state,
      trip: this.props.location.state.trip,
    }
    // this.postReview = this.postReview.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.state !== this.state) {
      this.setState(nextProps.state);
    }
  }

  render() {
    return (
      <div>
        <div className="hero-image-contact">
          <NavBar state={this.state} />
          <div className="text">Rate and Review</div>
        </div>

        <br></br>
        <div className="style1">
          <form>
            <div style={{ textAlign: "center" }}>
              <label htmlFor="ratingStars">Rating: &nbsp;</label>

              <select id="givenRating" name="Rating" value="5star">
                <option value="1star">⭐</option>
                <option value="2star">⭐⭐</option>
                <option value="3star">⭐⭐⭐</option>
                <option value="4star">⭐⭐⭐⭐</option>
                <option value="5star">⭐⭐⭐⭐⭐</option>
              </select>
            </div>

            <br></br>

            <div>
              <label htmlFor="exampleCompanytName">Review</label>
              <br></br>
              <textarea id="reviewText" rows="8" cols="70" name="review" form="reviewForm" placeholder="Write a review">
              </textarea>
            </div>
          </form>
        </div>

        <div className="style1">
          <button className="button-style-1">Submit</button>
        </div>
      </div>
    );
  }
}

export default WriteReview;
