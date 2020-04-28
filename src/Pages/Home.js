import React from "react";
import NavBar from "../Components/navbar";
import MediaCard from "../Components/featuredTrip";

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div />
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <div class="hero-image">
        <NavBar />
        <div class="hero-text-white">DISCOVER</div>
        <div class="hero-text-black">PAKISTAN.</div>
      </div>
      <Title title="-FEATURED TRIPS-" />
      <div className="organize-cards">
        <MediaCard />
      </div>
      <div>
        <img
          src={require("../hunza.png")}
          alt="picture2"
          width="100%"
          height="900px"
        ></img>
      </div>
      <div className="homepage-image-import">
        <img
          src={require("../homePageElement.jpg")}
          alt="picture2"
          width="90%"
          height="1000px"
        ></img>
      </div>
    </div>
  );
}
