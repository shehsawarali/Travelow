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
          <NavBar />
        </div>
        <p></p>
        <div className="root">
          <Paper className="paper">
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className="image">
                  <img
                    className="img"
                    alt="Kalam"
                    src={require("../Images/kalam.png")}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Standard license
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$19.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

export default TravelAgents;