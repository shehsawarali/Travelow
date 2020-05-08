import React from "react";
import NavBar from "../Components/navbar";
import MediaCard from "../Components/featuredTrip";
import TopAgents from "../Components/topAgents";
import UserReviewCard from "../Components/UserReview";
import { Link } from "react-router-dom";

const Title = ({ title }) => {
  return (
    <div className="section-title" className="titleFont">
      <h4>{title}</h4>
      <div />
    </div>
  );
};

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.state !== this.state) {
      this.setState(nextProps.state);
    }
  }

  render() {
    return (
      <div>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <div class="hero-image">
          <NavBar state={this.state} />
          <div class="hero-text-white">DISCOVER &nbsp;</div>
          <div class="hero-text-black">PAKISTAN.</div>
          <div position="relative">
            <div>
              <div>
                <div className="searchBar">
                  <input
                    label="Search"
                    icon="search"
                    placeholder={"Search Travelow"}
                    onChange={this.searchHandler}
                    height="10px"
                  ></input>

                  <select
                    value={this.state.Destination}
                    onChange={this.handleType}
                  >
                    <option>Destination</option>
                    <option>Travel Agent</option>
                  </select>

                  <Link to="/searchresults">
                    <button className="searchButton" onClick={this.query}>
                      <span>Search</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Title title="-FEATURED TRIPS-" />
        <div className="organize-cards">
          <MediaCard />
        </div>
        <div>
          <img
            src={require("../Images/hunza.png")}
            alt="picture2"
            width="80%"
            height="600px"
            className="AlignCenter"
          ></img>
        </div>
        <TopAgents />
        <div className="MyReviews1">
          <UserReviewCard />
        </div>
        <div className="homepage-image-import">
          <img
            src={require("../Images/homePageElement.jpg")}
            alt="picture2"
            width="90%"
            height="900px"
          ></img>
        </div>
      </div>
    );
  }
}
