/*
04/05/2020 - 11:30am:
Danyal changed react hook to class component.
Shifted styling to new css file TravelAgents.css.
*/

import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import NavBar from "../Components/navbar";
import "../OtherCssFiles/TravelAgents.css";

class TravelAgents extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="hero-image">
          {/* <NavBar /> */}
        </div>
        
      </div>
    );
  }
}

export default TravelAgents;
