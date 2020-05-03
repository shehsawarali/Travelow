import React from "react";
import NavBar from "../Components/navbar";
import firebase from "../config/fire";

const database = firebase.firestore();

class ContactUs extends React.Component {
  store() {
    const emailaddress = document.getElementById("email").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const msg = document.getElementById("message").value;

    console.log("sending message");

    database
      .collection("Messages")
      .add({
        email: emailaddress,
        firstName: firstName,
        lastName: lastName,
        message: msg,
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <div className="hero-image-contact">
          <NavBar />
        </div>

        <div className="text">CONTACT US</div>

        <div className="text-body1">First Name</div>

        <div className="text-body2">
          <input id="firstName" placeholder="First Name.." type="text" />
        </div>

        <div className="text-body3">Last Name</div>

        <div className="text-body4">
          <input id="lastName" placeholder=" Last Name.." type="text" />
        </div>

        <div className="text-body5">Email</div>

        <div className="text-body6">
          <input id="email" placeholder="abc@gmail.com" type="text" />
        </div>

        <div className="text-body7">Message</div>

        <div className="text-body8">
          <textarea
            id="message"
            placeholder="Type your message..."
            type="text"
            rows="6"
            cols="52"
          />
        </div>

        <br></br>
        <div className="text-body9">
          <button onClick={this.store}>Send</button>
        </div>
      </div>
    );
  }
}

export default ContactUs;
