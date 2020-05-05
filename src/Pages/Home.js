import React from "react";
import NavBar from "../Components/navbar";
import MediaCard from "../Components/featuredTrip";
import Search from "../Components/Search";
import TopAgents from "../Components/topAgents";

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
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.state !== this.state) {
      this.setState(nextProps.state);
    }
  }

  render() {
    return (
      <div>
        <div class="hero-image">
          <NavBar state={this.state} />
          <div class="hero-text-white">DISCOVER</div>
          <div class="hero-text-black">PAKISTAN.</div>
          <div position="relative">
            <Search />
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
            width="100%"
            height="900px"
          ></img>
        </div>
        <TopAgents />
        <div className="homepage-image-import">
          <img
            src={require("../Images/homePageElement.jpg")}
            alt="picture2"
            width="90%"
            height="1000px"
          ></img>
        </div>
      </div>
    );
  }
}
