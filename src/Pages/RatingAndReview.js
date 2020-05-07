import React from "react";
import NavBar from "../Components/navbar";
import firebase from "../config/fire";
import "../OtherCssFiles/RatingAndReview.css";

const database = firebase.firestore();

class WriteReview extends React.Component {
  store() {}

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

              <select id="cars" name="cars">
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
              <textarea rows="8" cols="70" name="review" form="reviewForm">
                Write a review...
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
