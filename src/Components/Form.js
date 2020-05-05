import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

// state = {
//     date: new Date(),
//   };
//   onChange = (date) => this.setState({ date });

class UploadForm extends Component {
//   constructor() {
//       super()
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const data = new FormData(event.target);

//     fetch("/api/form-submit-url", {
//       method: "POST",
//       body: data,
//     });
//   }

  render() {
    return (
      <form noValidate="false" autoComplete="off" onSubmit={this.handleSubmit}>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Name"
            placeholder="Title"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Location"
            placeholder="Location"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Trip Dates"
            placeholder="DD/MM to DD/MM"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Number of Seats"
            placeholder="Seats"
            type="number"
            variant="outlined"
          />
          <TextField
            id="outlined"
            label="Details"
            placeholder="Trip Details"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-number"
            label="Days"
            type="number"
            variant="outlined"
            placeholder="Number of Days"
          />
          <TextField
            required
            id="outlined-number"
            label="Nights"
            type="number"
            variant="outlined"
            placeholder="Number of Nights"
          />
          <TextField
            required
            id="outlined-required"
            label="Contact Number"
            placeholder="03XX-XXXXXXX"
            variant="outlined"
          />
        </div>
      </form>
    );
  }
}

export default UploadForm;
