import React, { Component } from "react";
import NavBar from "../Components/navbar";
import UploadForm from "../Components/Form";
// import CheckBox from "../Components/CheckBox";

class UploadTripPage extends Component {
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
      <>
        <div class="hero-image-contact">
          <NavBar state={this.state} />
          <div className="text">New Trip</div>
        </div>
        <div className="formFormatting">
          <UploadForm state={this.state}/>
        </div>
      </>
    );
  }
}

export default UploadTripPage;
