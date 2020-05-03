import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";




const useStyles = makeStyles({
  root: {
    maxWidth: 320,
  },
  media: {
    height: 230,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="row">
      <div className="column">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={require("../Images/kalam.png")}
              title="Kalam"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Kalam
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Travelia
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="column">
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={require("../Images/nathiagali.png")}
              title="Kalam"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Nathiagali
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Bestway Travels
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="column">
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={require("../Images/bhawalpur.png")}
              title="Kalam"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Bhawalpur
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Beydar Travels
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
