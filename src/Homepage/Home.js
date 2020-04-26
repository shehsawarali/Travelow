import React from "react";
// import { Link } from "react-router-dom";
// import Hero from "../components/Hero
// import container from '../App.css'

const home = () => {
  return (
    // <img
    //   src={require("../Baltoro_glacier_from_air.jpg")}
    //   alt="Background"
    //   width="1920"
    //   height="800"
    // ></img>
    <div class="container">
      <img
        src={require("../picture.jpeg")}
        alt="Background"
        width="1920"
        height="800"
      ></img>
      <div class="centered-white">DISCOVER</div>
      <div class="centered-blue">PAKISTAN.</div>
    </div>
  );
};

export default home;
