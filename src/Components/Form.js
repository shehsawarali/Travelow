import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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
        <h3>Trip Type:</h3>
        <CheckBox />
      </form>
    );
  }
}

function CheckBox() {
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
          />
        }
        label="Family"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Extreme"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedC}
            onChange={handleChange}
            name="checkedC"
            color="primary"
          />
        }
        label="Camping"
      />
    </div>
  );
}

export default UploadForm;
