import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import firebase from '../config/fire';
import * as timestamp from 'firebase';

const database = firebase.firestore().collection("Trips");

class UploadForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = this.props.state;
    this.postTrip = this.postTrip.bind(this);
  }

  postTrip() {
    const location = document.getElementById("location").value;
    const numberOfSeats = document.getElementById("numberOfSeats").value;
    const tripDates = document.getElementById("tripDates").value;
    const itinerary = document.getElementById("itinerary").value;
    const numberOfDays = document.getElementById("numberOfDays").value;
    const numberofNights = document.getElementById("numberOfNights").value;
    const contactNo = document.getElementById("contactNo").value;
    const price = document.getElementById("price").value;
    
    // var vendorID = "";
    // if(this.state.useremail !== null){vendorID = this.props.useremail}

    // const familyFriendly = document.getElementById("familyFriendly").value;
    // const extreme = document.getElementById("extreme").value;
    // const camping = document.getElementById("camping").value;

    database.add(
    {
      location: location,
      numberOfSeats: numberOfSeats,
      tripDates: tripDates,
      itinerary: itinerary,
      numberOfDays: numberOfDays,
      numberofNights: numberofNights,
      contactNo: contactNo,
      price: price,
      lastUpdated: timestamp.firestore.Timestamp.fromDate(new Date()),
      // vendorID: vendorID
      // familyFriendly: familyFriendly,
      // extreme: extreme,
      // camping: camping
    });

    console.log("added trip");
}

  render() {
    return (
      <form noValidate="false" autoComplete="off" onSubmit={this.handleSubmit}>
        <div>
          <TextField
            required
            id="location"
            label="Location"
            placeholder="Location"
            variant="outlined"
          />
          <TextField
            required
            id="price"
            label="Price"
            type="number"
            variant="outlined"
            placeholder="Price (PKR)"
          />
          <TextField
            required
            id="tripDates"
            label="Trip Dates"
            placeholder="DD/MM to DD/MM"
            variant="outlined"
          />
          <TextField
            required
            id="numberOfSeats"
            label="Number of Seats"
            placeholder="Seats"
            type="number"
            inputProps={{ min: "1"}}
            variant="outlined"
          />
          <TextField
            id="itinerary"
            label="Itinerary"
            placeholder="Trip Details"
            variant="outlined"
          />
          <TextField
            required
            id="numberOfDays"
            label="Days"
            type="number"
            variant="outlined"
            placeholder="Number of Days"
          />
          <TextField
            required
            id="numberOfNights"
            label="Nights"
            type="number"
            variant="outlined"
            placeholder="Number of Nights"
          />
          <TextField
            required
            id="contactNo"
            type="number"
            label="Contact Number"
            placeholder="03XX-XXXXXXX"
            variant="outlined"
          />
        </div>
        <h3>Trip Type:</h3>
        <CheckBox />
        <Button variant="contained" color="primary" onClick={this.postTrip}>
          Submit
        </Button>
      </form>
    );
  }
}

function CheckBox() {
  const [state, setState] = React.useState({
    familyFriendly: false,
    extreme: false,
    camping: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.familyFriendly}
            onChange={handleChange}
            name="familyFriendly"
            color="primary"
          />
        }
        label="Family"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.extreme}
            onChange={handleChange}
            name="extreme"
            color="primary"
          />
        }
        label="Extreme"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.camping}
            onChange={handleChange}
            name="camping"
            color="primary"
          />
        }
        label="Camping"
      />
    </div>
  );
}

export default UploadForm;
