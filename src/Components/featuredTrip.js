import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// const featured = [
//   {
//     id: 1,
//     img: "../Images/kalam.png",
//     alt: "Kalam Valley",
//     title: "Kalam",
//     subtitle: "TRAVELIA",
//   },
//   {
//     id: 2,
//     img: "../Images/nathiagali.png",
//     alt: "Nathiagali",
//     title: "Nathiagali",
//     subtitle: "Bestway Travels",
//   },
//   {
//     id: 3,
//     img: "../Images/bhawalpur.png",
//     alt: "Bhawalpur ",
//     title: "Bhawalpur",
//     subtitle: "Beydar Travels",
//   },
// ];

const useStyles = makeStyles({
  root: {
    width: "340px",
    height: "340px",
  },
  media: {
    height: "240px",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
      <div className="column">
        <div className="boxShadow">
          <Card className={classes.root} elevation="8" square="true">
            <CardMedia
              className={classes.media}
              image={require("../Images/kalam.png")}
              title="Kalam"
            ></CardMedia>
            <CardContent>
              <Typography gutterBottom component="h1" variant="alignCenter">
                <div className="tripTitleFont">Kalam</div>
              </Typography>
              <Typography variant="alignCenter" component="p">
                <div className="tripAgentFont">TRAVELIA</div>
              </Typography>
              <div className="priceTag">Rs. 8,000</div>
            </CardContent>
          </Card>
        </div>

        <div className="boxShadow">
          <Card className={classes.root} elevation="8" square="true">
            <CardMedia
              className={classes.media}
              image={require("../Images/nathiagali.png")}
              title="Nathiagali"
            />
            <CardContent>
              <Typography gutterBottom component="h1" variant="alignCenter">
                <div className="tripTitleFont">Nathiagali</div>
              </Typography>
              <Typography variant="alignCenter" component="p">
                <div className="tripAgentFont">BESTWAY TRAVELS</div>
              </Typography>
              <div className="priceTag">Rs. 6,500</div>
            </CardContent>
          </Card>
        </div>

        <div className="boxShadow">
          <Card className={classes.root} elevation="8" square="true">
            <CardMedia
              className={classes.media}
              image={require("../Images/bhawalpur.png")}
              title="Bhawalpur"
            />
            <CardContent>
              <Typography gutterBottom component="h1" variant="alignCenter">
                <div className="tripTitleFont">Bhawalpur</div>
              </Typography>
              <Typography variant="alignCenter" component="p">
                <div className="tripAgentFont">BEYDAR TRAVELS</div>
              </Typography>
              <div className="priceTag">Rs. 16,800</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
